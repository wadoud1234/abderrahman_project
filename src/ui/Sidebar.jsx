import Logo from "./Logo.jsx";
import Nav from "./Nav.jsx";
function Sidebar({ setSection }) {
  return (

    <aside className="font-primary col-start-1 col-end-2 row-start-1 row-end-3 min-h-screen w-14 overflow-hidden rounded-2xl border-r-2 py-7 shadow-md transition-all duration-300 hover:w-48">

    

      <Logo />
      <Nav setSection={setSection} />
    </aside>
  );
}

export default Sidebar;
