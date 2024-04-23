import { HiArchiveBox } from "react-icons/hi2";
import { AreaChartAdmin } from "../../ui/AreaChartAdmin";
import Statistic from "../../ui/Statistic";
import Statistics from "../../ui/Statistics";
import { MdOutlineWorkOutline } from "react-icons/md";
import { LuUsers2 } from "react-icons/lu";
import { TbMessageReport } from "react-icons/tb";
import DonutChartAdmin from "../../ui/DonutChartAdmin";

function Worker() {
  return (
    <div>
      {/* <h2 className="mb-4 text-xl text-primaryColor sm:text-3xl ">
        Applications Stats
      </h2> */}
      <Statistics>
        <Statistic
          color={"blue"}
          text={"Total of Workers"}
          icon={<MdOutlineWorkOutline></MdOutlineWorkOutline>}
          data={26000}
        />
        <Statistic
          color={"green"}
          text={"Total of Users"}
          icon={<LuUsers2></LuUsers2>}
          data={3000}
        />

        <Statistic
          color={"orange"}
          text={"Applications"}
          icon={<HiArchiveBox></HiArchiveBox>}
          data={500}
        />
        <Statistic
          color={"red"}
          text={"Reports"}
          icon={<TbMessageReport></TbMessageReport>}
          data={22}
        />
      </Statistics>

      <AreaChartAdmin route={"worker"} />
      <section className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
        <DonutChartAdmin type="general" route="application" />
        <DonutChartAdmin type="applicationPerJob" route="application" />
      </section>
    </div>
  );
}

export default Worker;
