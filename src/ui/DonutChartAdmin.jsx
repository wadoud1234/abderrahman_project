import { DonutChart, Legend } from "@tremor/react";
import { useEffect, useState } from "react";


const applicationGeneral = [
  {
    name: "Created",
    application: 40,
  },
  {
    name: "Accepted",
    application: 20,
  },
  {
    name: "Declined",
    application: 20,
  },
];

const applicationPerWorker = [
  {
    name: "macon",
    application: 40,
  },
  {
    name: "architect",
    application: 40,
  },
  {
    name: "designer",
    application: 20,
  },
];

function DonutChartAdmin({type,route}) {
  const [value, setvalue] = useState(null);
  // const {dataDonutChart}=useData(`${route}/${type}`) in case we have real data from the api
  //but this applies for the fake data
  const [dataChart,setDataChart]=useState([])
  useEffect(()=>{
    if(type==="general"){
    setDataChart(applicationGeneral)
  }
  if(type==="applicationPerJob"){
    setDataChart(applicationPerWorker)
  }},[type])
  

  return (
    <div className=" flex flex-col items-center justify-center  gap-y-2  rounded-2xl bg-customGray p-4  md:py-6 lg:flex-row lg:px-8">
      <DonutChart
        className="min-w-36"
        data={dataChart}
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
        categories={['Created','Accepted','Deleated']}
        colors={["blue-500", "green-500", "orange-500"]}
        className="max-w-xs"
      />
    </div>
  );
}

export default DonutChartAdmin;
