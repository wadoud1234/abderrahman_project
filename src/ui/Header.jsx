import { useLocation } from "react-router-dom";
import DashboardDate from "./DashboardDate";

function Header() {
  const location = useLocation();
  const { pathname } = location;
  const path =
    pathname.slice(1).charAt(0).toUpperCase() +
    pathname.slice(2).replaceAll("/", " > ");

  return (
    <header className="relative mx-auto mb-8 mt-8 min-h-60 w-full px-12">
      <p className="mb-2 text-2xl font-semibold text-primaryColor">{path}</p>
      <DashboardDate />
      <div className="min-h-2/3 mt-4 rounded-2xl bg-customGray p-9">
        <p className="mb-2 text-xl text-blue-800">Welcome back Admin,</p>
        <p className="text-primaryColor">
          Let's dive into your dashboard , and explore what's new
        </p>
        <p className="text-primaryColor">keep it up and achieve your goals</p>
        <img
          src="/assets/Data-illustration.svg"
          alt="illustration_dashboard"
          className="absolute -bottom-4 right-20 hidden h-64 lg:block "
        />
      </div>
    </header>
  );
}

export default Header;
