import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

function AppLayout() {
  return (
    <div className="grid h-screen grid-cols-[205px_1fr] grid-rows-[auto_1fr]">
      
      <aside className="row-span-2 bg-gray-50">
        <Sidebar />
      </aside>

      <header className="bg-gray-50 px-6 py-3 shadow">
        <Header />
      </header>

      <main className="bg-gray-100 px-10 py-3 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
