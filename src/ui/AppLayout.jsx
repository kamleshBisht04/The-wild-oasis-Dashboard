import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

function AppLayout() {
  return (
    <div className="grid h-screen grid-cols-[208px_1fr] grid-rows-[auto_1fr]">
      <div className="row-span-2 bg-white shadow h-screen">
        <Sidebar />
      </div>
      <div className="ml-0.1 bg-white px-6 py-3 shadow">
        <Header />
      </div>
      <main className="bg-gray-50 px-10 py-3">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
