import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

function AppLayout() {
  return (
    <div className="grid min-h-dvh grid-cols-[auto_1fr] grid-rows-[auto_1fr]">
      <Header />
      <Sidebar />
      <main className="px-12 pb-12 ">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
