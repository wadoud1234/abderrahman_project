import { BarChart } from "@tremor/react";
import { useState } from "react";
import Buttons from "./Buttons";
const chartdataMonths = [
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
const chartdataDays = [
  {
    date: "Jan 23",
    Created: 170,
    Accepted: 150,
    Declined: 105,
  },
  {
    date: "jan 24",
    Created: 125,
    Accepted: 87,
    Declined: 155,
  },
  {
    date: "jan 25",
    Created: 156,
    Accepted: 87,
    Declined: 145,
  },
  {
    date: "jan 26",
    Created: 165,
    Accepted: 112,
    Declined: 125,
  },
  {
    date: "jan 27",
    Created: 153,
    Accepted: 138,
    Declined: 165,
  },
  {
    date: "jan 28",
    Created: 124,
    Accepted: 145,
    Declined: 175,
  },
];
const chartdataYears = [
  {
    date: "2019",
    Created: 167,
    Accepted: 145,
    Declined: 135,
  },
  {
    date: "2020",
    Created: 125,
    Accepted: 110,
    Declined: 155,
  },
  {
    date: "2021",
    Created: 156,
    Accepted: 149,
    Declined: 87,
  },
  {
    date: "2022",
    Created: 165,
    Accepted: 112,
    Declined: 125,
  },
  {
    date: "2023",
    Created: 153,
    Accepted: 138,
    Declined: 165,
  },
  {
    date: "2024",
    Created: 87,
    Accepted: 145,
    Declined: 175,
  },
];

function BarChartAdmin({route}) {
  //in case we have real data from api
  // const [timeType,setTimeType]=useState("days")
  // const {dataChart}=useData(`${route}/${timeType}`)

  const [value, setValue] = useState(null);
  return (
    <>
    <div className="min-w-full rounded-2xl bg-customGray p-2 md:col-start-1 md:col-end-3 md:px-8  md:py-6">
      <h2 className="text-xl text-primaryColor">Bar Chart</h2>
      <BarChart
        className="h-52 md:h-64 lg:h-80"
        data={chartdataMonths}
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
    <Buttons />
    </>
  );
}

export default BarChartAdmin;
