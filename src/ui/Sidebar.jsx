// import { NavLink } from "react-router-dom";

import Logo from "./Logo.jsx";
import Nav from "./Nav.jsx";
// #FC6736
// #EFECEC
function Sidebar() {
  return (
    <aside className="font-primary col-start-1 col-end-2 row-start-1 row-end-3 min-h-screen w-44 py-7 ">
      <Logo />
      <Nav />
    </aside>
  );
}

export default Sidebar;
