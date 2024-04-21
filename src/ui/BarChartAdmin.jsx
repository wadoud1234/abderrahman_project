import { BarChart } from "@tremor/react";
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
  return (
    <div className="rounded-2xl bg-customGray p-4">
      <BarChart
        className="h-72"
        data={chartdata}
        index="date"
        categories={["Created", "Accepted", "Declined"]}
        colors={["blue-800", "orange-500", "yellow-400"]}
        yAxisWidth={30}
      />
    </div>
  );
}

export default BarChartAdmin;
