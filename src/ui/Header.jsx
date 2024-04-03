import DashboardDate from "./DashboardDate";

function Header({ section }) {
  return (
    <header className="relative mx-auto my-8 h-60 w-full px-12 ">
      <p className="text-primaryColor mb-2 text-2xl font-semibold">{section}</p>
      <DashboardDate />
      <div className="min-h-2/3 bg-customGray mt-4 rounded-2xl p-9">
        <p className="mb-2 text-xl text-blue-800">Welcome back Admin,</p>
        <p className="text-primaryColor">
          Let's dive into your dashboard , and explore what's new{" "}
        </p>
        <p className="text-primaryColor">keep it up and achieve your goals</p>
        <img
          src="/public/assets/Data-illustration.svg"
          alt="illustration_dashboard"
          className="absolute -bottom-4 right-20 hidden h-64 lg:block "
        />
      </div>
    </header>
  );
}

export default Header;
