import { FaTrash } from "react-icons/fa";

function ImagePreview({ files, removeFile }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-8">

      {files.map((file, index) => (
        <div
          key={index}
          className="relative rounded-xl overflow-hidden shadow-lg"
        >

          <img
            src={URL.createObjectURL(file)}
            alt=""
            className="h-44 w-full object-cover"
          />

          <button
            onClick={() => removeFile(index)}
            className="absolute top-2 right-2 bg-red-600 text-white p-2 rounded-full"
          >
            <FaTrash />
          </button>

        </div>
      ))}

    </div>
  );
}

export default ImagePreview;