import Date from "./Date";

function Header({ section }) {
  return (

    

    <header className="relative mx-auto my-8 h-60 w-full px-12 ">
      <p className="mb-2 text-2xl font-semibold text-primaryColor">{section}</p>
      <Date />
      <div className="mt-4 min-h-2/3 rounded-2xl bg-customGray p-9">
        <p className="mb-2 text-xl text-blue-800">Welcome back Admin,</p>
        <p className="text-primaryColor">Let's dive into your dashboard , and explore what's new </p>
        <p className="text-primaryColor">keep it up and achieve your goals</p>
        <img
          src="/public/assets/Data-illustration.svg"
          alt="illustration_dashboard"
          className="absolute -bottom-4 right-20 h-64 hidden lg:block "
        />

      
    </header>
  );
}

export default Header;
