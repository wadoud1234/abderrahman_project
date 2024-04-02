import Date from "./Date";

function Header({ section }) {
  return (
    <div className="h-60 w-[90%] mx-auto my-8 relative ">
      <p className="text-customBlue text-2xl font-semibold mb-2">{section}</p>
      <Date />
      <div className="bg-customGray h-2/3 rounded-2xl mt-4 p-9">
        <p className="text-blue-800 text-xl mb-2">Welcome back Admin,</p>
        <p>Let's dive into your dashboard , and explore what's new </p>
        <p>keep it up and achieve your goals</p>
      <img src="/public/assets/Data-illustration.svg" alt="illustration_dashboard" className="absolute bottom-[-16px] right-20 h-64 transition-all duration-300 hover:scale-110"/>
      </div>
    </div>
  );
}

export default Header;
