import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

function AppLayout() {
  return (
    <div className="grid min-h-dvh grid-cols-[11rem_1fr] grid-rows-[auto_1fr]">
      <Header />
      <Sidebar />
      <main className="bg-green-300">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
