import { useDropzone } from "react-dropzone";

function FileUploader({ files, setFiles }) {

  const { getRootProps, getInputProps } = useDropzone({

    accept: {
      "image/*": [],
    },

    multiple: true,

    onDrop: (acceptedFiles) => {

      setFiles((prev) => [
        ...prev,
        ...acceptedFiles,
      ]);

    },

  });

  return (

    <div
      {...getRootProps()}
      className="border-4 border-dashed border-blue-400 rounded-xl p-12 text-center cursor-pointer hover:bg-blue-50 transition"
    >

      <input {...getInputProps()} />

      <div className="text-6xl mb-4">
        ➕
      </div>

      <h2 className="text-2xl font-bold">

        Add Images

      </h2>

      <p className="mt-3 text-gray-500">

        Drag & Drop or Click to Select Multiple Images

      </p>

      {files.length > 0 && (

        <p className="mt-5 font-bold text-blue-600">

          {files.length} image(s) selected

        </p>

      )}

    </div>

  );

}

export default FileUploader;