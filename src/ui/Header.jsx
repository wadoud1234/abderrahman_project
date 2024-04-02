import Date from "./Date";

function Header({ section }) {
  return (
    <div className="h-60 border-b">
      <p className="text-customBlue text-2xl font-semibold">{section}</p>
      <Date />
      <div className="bg-customGray h-2/3 rounded-2xl">hello</div>
    </div>
  );
}

export default Header;
