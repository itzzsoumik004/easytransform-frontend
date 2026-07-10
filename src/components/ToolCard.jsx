import { Link } from "react-router-dom";

function ToolCard({ title, icon, link }) {
  return (
    <Link to={link}>
      <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 cursor-pointer hover:-translate-y-2">

        <div className="text-5xl mb-5">
          {icon}
        </div>

        <h3 className="text-xl font-semibold">
          {title}
        </h3>

      </div>
    </Link>
  );
}

export default ToolCard;