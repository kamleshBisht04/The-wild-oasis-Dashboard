import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

function AppLayout() {
  return (
    <div className="grid h-screen grid-cols-[205px_1fr] grid-rows-[auto_1fr]">
      <aside className="row-span-2 bg-white">
        <Sidebar />
      </aside>

      <header className="bg-white px-6 py-2 shadow">
        <Header />
      </header>

      <main className="overflow-y-auto bg-gray-50">
        <div className="mx-auto w-full max-w-5xl px-4 py-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default AppLayout;
