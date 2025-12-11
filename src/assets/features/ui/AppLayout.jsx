import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

function AppLayout() {
  return (
    <div className="grid h-screen grid-cols-[200px_1fr] grid-rows-[auto_1fr]">
      <div className="row-span-2 bg-white px-6 ">
        <Sidebar />
      </div>
      <div className="bg-white px-6 py-4 shadow">
        <Header />
      </div>
      <div className="overflow-y-auto bg-gray-50 p-6">
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;
