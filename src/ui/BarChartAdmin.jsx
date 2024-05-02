import { BarChart } from "@tremor/react";
import { useState } from "react";
import Buttons from "./Buttons";
import Button from "./Button";
import { generateColors, getChartCategories } from "../utils/helpers";
import { IoBarChartOutline } from "react-icons/io5";
import { useDataAreaBarCharts } from "../services/useData";
import Loader from "./Loader";
// const chartdataMonths = [
//   {
//     date: "Jan 23",
//     Created: 167,
//     Accepted: 145,
//     Declined: 135,
//   },
//   {
//     date: "Feb 23",
//     Created: 125,
//     Accepted: 110,
//     Declined: 155,
//   },
//   {
//     date: "Mar 23",
//     Created: 156,
//     Accepted: 149,
//     Declined: 145,
//   },
//   {
//     date: "Apr 23",
//     Created: 165,
//     Accepted: 112,
//     Declined: 125,
//   },
//   {
//     date: "May 23",
//     Created: 153,
//     Accepted: 138,
//     Declined: 165,
//   },
//   {
//     date: "Jun 23",
//     Created: 124,
//     Accepted: 145,
//     Declined: 175,
//   },
// ];
// const chartdataDays = [
//   {
//     date: "Jan 23",
//     Created: 170,
//     Accepted: 150,
//     Declined: 105,
//   },
//   {
//     date: "jan 24",
//     Created: 125,
//     Accepted: 87,
//     Declined: 155,
//   },
//   {
//     date: "jan 25",
//     Created: 156,
//     Accepted: 87,
//     Declined: 145,
//   },
//   {
//     date: "jan 26",
//     Created: 165,
//     Accepted: 112,
//     Declined: 125,
//   },
//   {
//     date: "jan 27",
//     Created: 153,
//     Accepted: 138,
//     Declined: 165,
//   },
//   {
//     date: "jan 28",
//     Created: 124,
//     Accepted: 145,
//     Declined: 175,
//   },
// ];
// const chartdataYears = [
//   {
//     date: "2019",
//     Created: 167,
//     Accepted: 145,
//     Declined: 135,
//   },
//   {
//     date: "2020",
//     Created: 125,
//     Accepted: 110,
//     Declined: 155,
//   },
//   {
//     date: "2021",
//     Created: 156,
//     Accepted: 149,
//     Declined: 87,
//   },
//   {
//     date: "2022",
//     Created: 165,
//     Accepted: 112,
//     Declined: 125,
//   },
//   {
//     date: "2023",
//     Created: 153,
//     Accepted: 138,
//     Declined: 165,
//   },
//   {
//     date: "2024",
//     Created: 87,
//     Accepted: 145,
//     Declined: 175,
//   },
// ];

function BarChartAdmin({ route }) {
  //route is like applications for example
  const [value, setValue] = useState(null);
  const [timeType, setTimeType] = useState("daily");
  const { data: dataChart, isLoading } = useDataAreaBarCharts(
    `${route}/${timeType}`,
  );

  const categories = dataChart ? getChartCategories(dataChart) : [];

  const colors = generateColors(categories.length);

  return (
    <>
      <div className="mb-3 flex items-center gap-3">
        <h3 className="  text-lg text-primaryColor sm:text-2xl">
          Actions Overview
        </h3>
        <IoBarChartOutline className="text-lg text-primaryColor sm:text-2xl" />
      </div>

      <div className="mb-2 flex h-56 min-w-full items-center justify-center rounded-2xl bg-customGray p-2 md:h-72 md:p-6 lg:h-96">
        {isLoading && <Loader />}
        {!isLoading && (
          <BarChart
            className="h-52 md:h-64 lg:h-80"
            data={dataChart}
            index="date"
            categories={categories}
            colors={colors}
            yAxisWidth={25}
            showAnimation
            animationDuration={1000}
            barCategoryGap={"15%"}
            onValueChange={(value) => setValue(value)}
          />
        )}
      </div>
      <Buttons>
        <Button>days</Button>
        <Button>months</Button>
        <Button>years</Button>
      </Buttons>
    </>
  );
}

export default BarChartAdmin;
