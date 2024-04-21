import { AreaChart } from "@tremor/react";
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

export function AreaChartAdmin() {
  const [value, setValue] = useState(null);
  return (
    <div className="rounded-2xl bg-customGray p-3 sm:p-4">
      <AreaChart
        className="h-52 sm:h-80"
        data={chartdata}
        index="date"
        categories={["Created", "Declined", "Accepted"]}
        colors={["blue-500", "orange-500", "green-500"]}
        yAxisWidth={30}
        onValueChange={(v) => setValue(v)}
        connectNulls={true}
      />
    </div>
  );
}
