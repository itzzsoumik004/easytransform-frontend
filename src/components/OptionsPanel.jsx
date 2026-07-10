import {
  PAGE_SIZES,
  ORIENTATIONS,
  QUALITIES,
} from "../constants/pdfOptions";

function OptionsPanel({
  pageSize,
  setPageSize,
  orientation,
  setOrientation,
  quality,
  setQuality,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mt-8">

      <h2 className="text-2xl font-bold mb-6">
        PDF Options
      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        <div>
          <label className="font-semibold">
            Page Size
          </label>

          <select
            className="w-full mt-2 border rounded-lg p-3"
            value={pageSize}
            onChange={(e) => setPageSize(e.target.value)}
          >
            {PAGE_SIZES.map((item) => (
              <option
                key={item.value}
                value={item.value}
              >
                {item.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="font-semibold">
            Orientation
          </label>

          <select
            className="w-full mt-2 border rounded-lg p-3"
            value={orientation}
            onChange={(e) => setOrientation(e.target.value)}
          >
            {ORIENTATIONS.map((item) => (
              <option
                key={item.value}
                value={item.value}
              >
                {item.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="font-semibold">
            Quality
          </label>

          <select
            className="w-full mt-2 border rounded-lg p-3"
            value={quality}
            onChange={(e) => setQuality(e.target.value)}
          >
            {QUALITIES.map((item) => (
              <option
                key={item.value}
                value={item.value}
              >
                {item.label}
              </option>
            ))}
          </select>
        </div>

      </div>
    </div>
  );
}

export default OptionsPanel;