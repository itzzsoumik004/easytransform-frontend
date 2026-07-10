function ProgressBar({ progress }) {
  return (
    <div className="mt-8">

      <div className="w-full h-4 bg-gray-200 rounded-full">

        <div
          className="bg-blue-600 h-4 rounded-full transition-all"
          style={{ width: `${progress}%` }}
        />

      </div>

      <p className="mt-2 text-center font-semibold">
        {progress}%
      </p>

    </div>
  );
}

export default ProgressBar;