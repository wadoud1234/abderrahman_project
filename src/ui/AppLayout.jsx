import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

function AppLayout() {
  return (
    <div className="grid min-h-full grid-cols-[auto_1fr] ">
      <Sidebar />

      <div>
        <Header />
        <main className=" px-12 pb-12">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
