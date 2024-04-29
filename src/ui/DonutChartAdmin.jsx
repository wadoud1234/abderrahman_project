import { DonutChart, Legend } from "@tremor/react";
import { useEffect, useState } from "react";
import { generateColors, getDonutChartCategories } from "../utils/helpers";

const applicationGeneral = [
  {
    name: "Created",
    value: 40,
  },
  {
    name: "Accepted",
    value: 20,
  },
  {
    name: "Declined",
    value: 20,
  },
];

const applicationPerWorker = [
  {
    name: "macon",
    value: 40,
  },
  {
    name: "architect",
    value: 40,
  },
  {
    name: "designer",
    value: 20,
  },
];

function DonutChartAdmin({ type, route }) {
  const [value, setvalue] = useState(null);
  // const {dataDonutChart}=useData(`${route}/${type}`) in case we have real data from the api
  //but this applies for the fake data
  const [dataChart, setDataChart] = useState([]);
  useEffect(() => {
    if (type === "general") {
      setDataChart(applicationGeneral);
    }
    if (type === "applicationPerJob") {
      setDataChart(applicationPerWorker);
    }
  }, [type]);
  const colors = generateColors(dataChart.length);
  const categories = getDonutChartCategories(dataChart);
  return (
    <div className=" flex flex-col items-center justify-center  gap-y-3  rounded-2xl bg-customGray p-4  md:py-6 lg:flex-row lg:px-8">
      <DonutChart
        data={dataChart}
        category="value"
        index="name"
        colors={colors}
        variant="donut"
        showAnimation
        animationDuration={1000}
        onValueChange={(value) => setvalue(value)}
      />
      <Legend categories={categories} colors={colors}  />
    </div>
  );
}

export default DonutChartAdmin;
