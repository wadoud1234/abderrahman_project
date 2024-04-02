import Date from "./Date";

function Header({ section }) {
  return (
    <div className="h-60 w-[90%] mx-auto my-8 relative ">
      <p className="text-primaryColor text-2xl font-semibold mb-2">{section}</p>
      <Date />
      <div className="bg-customGray min-h-2/3 rounded-2xl mt-4 p-9">
        <p className="text-blue-800 text-xl mb-2">Welcome back Admin,</p>
        <p className="text-primaryColor">Let's dive into your dashboard , and explore what's new </p>
        <p className="text-primaryColor">keep it up and achieve your goals</p>
      <img src="/public/assets/Data-illustration.svg" alt="illustration_dashboard" className="absolute bottom-[-16px] right-20 h-64 hidden lg:block"/>
      </div>
    </div>
  );
}

export default Header;
