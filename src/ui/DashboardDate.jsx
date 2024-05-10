import { getDate } from "../utils/helpers";

function DashboardDate() {
  const {dayOfTheWeek,day,month,year}=getDate()
  return (
    <div>
      <p className="text-stone-400 text-xs tracking-wider">
        {day} {month} {year},{dayOfTheWeek}
      </p>
     
    </div>
  );
}

export default DashboardDate;
