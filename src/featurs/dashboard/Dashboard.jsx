import Button from "../../ui/Button";

function Dashboard() {
  return (
    <div className="w-full space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-700">Dashboard</h1>

        {/* Filter Buttons */}
        <div className="flex items-center gap-1 rounded-lg bg-white p-1 shadow-sm">
          <Button variation="active">Last 7 days</Button>
          <Button>Last 30 days</Button>
          <Button>Last 90 days</Button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
