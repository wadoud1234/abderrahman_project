import { BarChart } from "@tremor/react";
import { useState } from "react";

function BarChartAdmin({ data }) {
  const [value, setValue] = useState(null);
  return (
    <div className="min-w-full rounded-2xl bg-customGray p-2 md:col-start-1 md:col-end-3 md:px-8  md:py-6">
      <h2 className="text-xl text-primaryColor">Bar Chart</h2>
      <BarChart
        className="h-52 md:h-64 lg:h-80"
        data={data}
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
