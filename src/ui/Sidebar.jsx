import Logo from "./Logo.jsx";
import Nav from "./Nav.jsx";
function Sidebar() {
  return (
    <aside className="sticky top-0 col-start-1 col-end-2 max-h-screen w-16 overflow-x-hidden rounded-r-2xl  border-r-2 py-7 shadow-md transition-all duration-500 hover:w-48 xl:w-[5.1rem] xl:hover:w-64 mr-1">
      <Logo />
      <Nav />
    </aside>
  );
}

export default Sidebar;
