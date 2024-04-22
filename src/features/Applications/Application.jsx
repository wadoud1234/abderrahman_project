import { useState } from "react";
import BarChartAdmin from "../../ui/BarChartAdmin";
import Buttons from "../../ui/Buttons";
import DonutChartAdmin from "../../ui/DonutChartAdmin";

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
function Application() {
  const [dataType, setDataType] = useState(chartdataDays);
  return (
    <div className="grid grid-cols-1 gap-6  md:grid-cols-2">
      <BarChartAdmin data={dataType} />
      <Buttons />
      <DonutChartAdmin
        categories={["Created", "Accepted", "Declined"]}
        data={applicationGeneral}
      />
      <DonutChartAdmin
        categories={["macon", "architect", "designer"]}
        data={applicationPerWorker}
      />
    </div>
  );
}

export default Application;
