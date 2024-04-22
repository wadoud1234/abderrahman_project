import { DonutChart, Legend } from "@tremor/react";
import { useState } from "react";

function DonutChartAdmin({ data, categories = [] }) {
  const [value, setvalue] = useState(null);

  return (
    <div className=" flex flex-col items-center justify-center  gap-y-2  rounded-2xl bg-customGray p-4  md:py-6 lg:flex-row lg:px-8">
      <DonutChart
        className="min-w-36"
        data={data}
        category="application"
        index="name"
        colors={["blue-500", "green-500", "orange-500"]}
        label="Applications"
        variant="donut"
        showAnimation
        animationDuration={1000}
        onValueChange={(value) => setvalue(value)}
      />
      <Legend
        categories={categories}
        colors={["blue-500", "green-500", "orange-500"]}
        className="max-w-xs"
      />
    </div>
  );
}

export default DonutChartAdmin;
