import { BarChart } from "@tremor/react";
import { useState } from "react";
const chartdata = [
  {
    date: "Jan 23",
    Created: 167,
    Accepted: 145,
    Declined: 135,
  },
  {
    date: "Feb 23",
    Created: 125,
    Accepted: 110,
    Declined: 155,
  },
  {
    date: "Mar 23",
    Created: 156,
    Accepted: 149,
    Declined: 145,
  },
  {
    date: "Apr 23",
    Created: 165,
    Accepted: 112,
    Declined: 125,
  },
  {
    date: "May 23",
    Created: 153,
    Accepted: 138,
    Declined: 165,
  },
  {
    date: "Jun 23",
    Created: 124,
    Accepted: 145,
    Declined: 175,
  },
];

function BarChartAdmin() {
  const [value, setValue] = useState(null);
  return (
    <div className="rounded-2xl bg-customGray p-2 md:px-8 md:py-6">
      <BarChart
        className="h-52 md:h-64 lg:h-80"
        data={chartdata}
        index="date"
        categories={["Created", "Accepted", "Declined"]}
        colors={["blue-800", "green-600", "orange-500"]}
        yAxisWidth={25}
        showAnimation
        animationDuration={1000}
        barCategoryGap={"15%"}
        onValueChange={(value) => setValue(value)}
      />
    </div>
  );
}

export default BarChartAdmin;
