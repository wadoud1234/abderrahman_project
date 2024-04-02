import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useState } from "react";

function AppLayout() {
  //to know the section where we are 
  const [section,setSection]=useState("Application")
  
  return (
    <div className="grid min-h-dvh grid-cols-[auto_1fr] grid-rows-[auto_1fr]">
      <Header section={section}/>
      <Sidebar setSection={setSection} />
      <main className=" bg-green-300 ">
          <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
