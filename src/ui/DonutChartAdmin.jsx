import { DonutChart, Legend } from "@tremor/react";
// import { useEffect, useState } from "react";
import { generateColors, getDonutChartCategories, isArray, validateArray } from "../utils/helpers";
import { useDataAreaBarCharts } from "../services/useData";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";
import { useState } from "react";

function DonutChartAdmin({ type, route }) {
  const [value, setvalue] = useState(null);
  console.log({ value });
  const {
    data: dataDonutChart,
    isLoading,
    error,
  } = useDataAreaBarCharts(route, type);//{error:null,data:[],isLoading:false}//

  const categories = dataDonutChart
    ? getDonutChartCategories(dataDonutChart)
    : [];

  const colors = generateColors(categories.length);

  return (
    <div className=" flex flex-col items-center justify-center  gap-y-3  rounded-2xl bg-customGray p-4  md:py-6  lg:px-6">
      {error && <ErrorMessage />}
      {!error && isLoading && <Loader />}
      {!error && !isLoading && (
        <>
          <DonutChart
            data={validateArray(dataDonutChart)}
            category="count"
            index="_id"
            colors={colors}
            variant="donut"
            showAnimation
            animationDuration={1000}
            onValueChange={(value) => setvalue(value)}
          />
          {isArray(categories) && <Legend categories={categories} colors={colors} />}
        </>
      )}
    </div>
  );
}

export default DonutChartAdmin;
