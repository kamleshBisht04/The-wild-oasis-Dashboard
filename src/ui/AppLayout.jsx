import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

function AppLayout() {
  return (
    <div className="grid h-screen grid-cols-[205px_1fr] grid-rows-[auto_1fr]">
      <div className="row-span-2 h-screen bg-gray-50 ">
        <Sidebar />
      </div>
      <div className="ml-0.1 bg-gray-50 px-6 py-3 shadow">
        <Header />
      </div>
      <main className="bg-gray-100 px-10 py-3 ">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
