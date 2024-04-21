import Logo from "./Logo.jsx";
import Nav from "./Nav.jsx";
function Sidebar() {
  return (
    <aside className="col-start-1 col-end-2 row-start-1 row-end-3 min-h-screen w-14 overflow-hidden rounded-2xl border-r-2 py-7 shadow-md transition-all duration-500 hover:w-48 xl:w-[5.1rem] xl:hover:w-64 ">
      <Logo />
      <Nav />
    </aside>
  );
}

export default Sidebar;
