
import BarChartAdmin from "../../ui/BarChartAdmin";

import DonutChartAdmin from "../../ui/DonutChartAdmin";

function Application() {
  return (
    <div className="grid grid-cols-1 gap-6  md:grid-cols-2">
      <BarChartAdmin route="application"/>
      
      <DonutChartAdmin type="general" route="application"/>
      <DonutChartAdmin type="applicationPerJob" route="application"/>
    </div>
  );
}

export default Application;
