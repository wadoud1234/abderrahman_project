import { HiArchiveBox } from "react-icons/hi2";
import { AreaChartAdmin } from "../../ui/AreaChartAdmin";
import Statistic from "../../ui/Statistic";
import Statistics from "../../ui/Statistics";
import { MdOutlineWorkOutline } from "react-icons/md";
import { LuUsers2 } from "react-icons/lu";
import { TbMessageReport } from "react-icons/tb";

function Worker() {
  return (
    <div>
      <Statistics>
        <Statistic
          color={"blue"}
          text={"Total of Workers"}
          icon={<MdOutlineWorkOutline></MdOutlineWorkOutline>}
          data={260}
        />
        <Statistic
          color={"green"}
          text={"Total of Users"}
          icon={<LuUsers2></LuUsers2>}
          data={300}
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

      <h2 className="mb-4 text-xl text-primaryColor sm:text-3xl ">
        Applications Stats
      </h2>
      <AreaChartAdmin route={"worker"} />
    </div>
  );
}

export default Worker;
