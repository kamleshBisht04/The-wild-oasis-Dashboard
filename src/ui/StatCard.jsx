function StatCard({ title, value, icon, color }) {
  const colorMap = {
    blue: "bg-blue-100 text-blue-600",
    green: "bg-green-100 text-green-600",
    indigo: "bg-indigo-100 text-indigo-600",
    yellow: "bg-yellow-100 text-yellow-600",
  };

  return (
    <div className="rounded-md bg-white px-3 py-4 shadow-sm">
      <div className="flex items-center gap-4">
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-full ${colorMap[color]}`}
        >
          {icon}
        </div>
        <div>
          <p className="text-sm font-medium text-gray-500 uppercase">{title}</p>
          <p className="text-2xl font-semibold text-gray-800">{value}</p>
        </div>
      </div>
    </div>
  );
}

export default StatCard;
