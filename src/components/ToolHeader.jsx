function ToolHeader({ title, description }) {
  return (
    <div className="text-center mb-10">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="mt-3 text-gray-600">{description}</p>
    </div>
  );
}

export default ToolHeader;