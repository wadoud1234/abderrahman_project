import { HiArchiveBox } from "react-icons/hi2";
import { AreaChartAdmin } from "../../ui/AreaChartAdmin";
import Statistic from "../../ui/Statistic";
import Statistics from "../../ui/Statistics";
import { MdOutlineWorkOutline } from "react-icons/md";
import { LuUsers2 } from "react-icons/lu";
import { TbChartDonut, TbMessageReport } from "react-icons/tb";
import DonutChartAdmin from "../../ui/DonutChartAdmin";

function Posts() {
  return (
    <div>
      <h2 className="mb-8 text-xl  font-semibold text-primaryColor sm:text-3xl">
        Posts Stats
      </h2>
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

      <AreaChartAdmin route={"posts"} />

      <div className="mb-3 flex items-center gap-3">
        <h3 className="  text-lg text-primaryColor sm:text-2xl">
          Workflow Summary
        </h3>
        <TbChartDonut className="text-lg text-primaryColor sm:text-2xl" />
      </div>

      <section className=" grid grid-cols-1 gap-4 md:grid-cols-2">
        <DonutChartAdmin type="general" route="applications" />
        <DonutChartAdmin type="applicationPerJob" route="applications" />
      </section>
    </div>
  );
}

export default Posts;
