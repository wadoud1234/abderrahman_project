function Time() {
  const currentDate = new Date();

  const dayOfTheWeek = currentDate.toLocaleDateString("en-US", {
    weekday: "long",
  });
  const day = currentDate.getDate();
  const month = currentDate.toLocaleDateString("en-US", { month: "long" });
  const year = currentDate.getFullYear();
  return (
    <div>
      <p className="text-stone-400 text-xs tracking-wider">
        {day} {month} {year},{dayOfTheWeek}
      </p>
     
    </div>
  );
}

export default Time;
