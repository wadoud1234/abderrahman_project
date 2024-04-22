import Button from "../ui/Button";

function Buttons() {
  return (
    <div
      className="flex flex-col items-center 
    gap-3 rounded-2xl bg-customGray p-4 
    sm:flex-row sm:gap-6 md:col-start-1 md:col-end-3 lg:p-5"
    >
      <Button set>Days</Button>
      <Button>Months</Button>
      <Button>Years</Button>
    </div>
  );
}

export default Buttons;
