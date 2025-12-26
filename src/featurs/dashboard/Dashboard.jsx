import Button from "../../ui/Button";
import StatCard from "../../ui/StatCard";
import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineChartBar,
  HiOutlineCheckCircle,
} from "react-icons/hi2";

function Dashboard() {
  return (
    <div className="w-full space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-700">Dashboard</h1>

        {/* Filter Buttons */}
        <div className="flex items-center gap-1 rounded-md bg-white p-1 shadow-sm">
          <Button variation="active">Last 7 days</Button>
          <Button>Last 30 days</Button>
          <Button>Last 90 days</Button>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Bookings"
          value="10"
          icon={<HiOutlineBriefcase className="h-6 w-6 text-blue-600" />}
          bgColor="bg-emerald-100"
          color="blue"
        />

        <StatCard
          title="Sales"
          value="$32,465"
          icon={<HiOutlineBanknotes className="h-6 w-6" />}
          color="green"
        />

        <StatCard
          title="Check ins"
          value="5"
          icon={<HiOutlineCheckCircle className="h-6 w-6" />}
          color="indigo"
        />

        <StatCard
          title="Occupancy rate"
          value="45%"
          icon={<HiOutlineChartBar className="h-6 w-6" />}
          color="yellow"
        />
      </div>
    </div>
  );
}

export default Dashboard;
