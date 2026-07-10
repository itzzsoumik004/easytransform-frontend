import { jsPDF } from "jspdf";

export const imagesToPdf = async (
  images,
  pageSize = "a4",
  orientation = "portrait"
) => {
  const pdf = new jsPDF({
    orientation,
    unit: "mm",
    format: pageSize,
  });

  for (let i = 0; i < images.length; i++) {
    const file = images[i];

    const imgData = await new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (e) => resolve(e.target.result);
      reader.readAsDataURL(file);
    });

    if (i > 0) pdf.addPage();

    const width = pdf.internal.pageSize.getWidth();
    const height = pdf.internal.pageSize.getHeight();

    pdf.addImage(
      imgData,
      "JPEG",
      5,
      5,
      width - 10,
      height - 10
    );
  }

  pdf.save("EasyTransform.pdf");
};