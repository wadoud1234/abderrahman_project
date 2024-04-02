import Logo from "./Logo.jsx";
import Nav from "./Nav.jsx";
function Sidebar({ setSection }) {
  return (
    <aside className=" col-start-1 col-end-2 row-start-1 row-end-3 min-h-screen w-14  overflow-hidden py-7 transition-all duration-300 hover:w-48">
      <Logo />
      <Nav setSection={setSection} />
    </aside>
  );
}

export default Sidebar;
