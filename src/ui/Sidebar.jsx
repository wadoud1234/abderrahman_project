// import { NavLink } from "react-router-dom";

import Logo from "./Logo.jsx";
import Nav from "./Nav.jsx";
// #FC6736
// #EFECEC
function Sidebar() {
  return (
    <aside className="font-primary min-h-screen w-40 py-7 shadow-md shadow-[#FC673640]">
      <Logo />
      <Nav />
    </aside>
  );
}

export default Sidebar;
