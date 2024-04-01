import Logo from "./Logo.jsx";
import Nav from "./Nav.jsx";
function Sidebar() {
  return (
    <aside className="font-primary col-start-1 col-end-2 row-start-1 row-end-3 min-h-screen w-14  overflow-hidden py-7 transition-all duration-300 hover:w-44">
      <Logo />
      <Nav />
    </aside>
  );
}

export default Sidebar;
