import { HiOutlineHome, HiOutlineUsers } from "react-icons/hi2";
import { TbMessageReport, TbCertificate, TbReportSearch } from "react-icons/tb";
import { GrUserWorker } from "react-icons/gr";
import { MdOutlinePunchClock } from "react-icons/md";
import { AiOutlineComment } from "react-icons/ai";
import { MdPostAdd } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";

function Nav({setSection}) {
  return (
    <ul className="space-y-4 px-3">
      <li className="border-b pb-2 pt-3 ">
        <div className="mb-2 flex w-44 items-center gap-4 border-b px-2 pb-2 ">
          <HiOutlineHome className="text-xl text-gray-400" />
          <span className="text-customBlue font-semibold  ">Dashboard</span>
        </div>
        <ul className="space-y-2">
          <li>
            <NavLink
              to="dashboard/applications"
              onClick={()=>setSection("Application")}
              className=" flex w-44 items-center gap-4
              rounded-md border-2 border-transparent  px-2 py-2 tracking-wide  hover:bg-slate-100 "
            >
              <TbReportSearch className="text-xl text-gray-400" />
              <span className="text-customBlue relative font-semibold ">
                Applications
              </span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="dashboard/workers"
              onClick={()=>setSection("Workers")}
              className=" flex w-44 items-center  gap-4
          rounded-md border-2 border-transparent  px-2 py-2 tracking-wide  hover:bg-slate-100 "
            >
              <GrUserWorker className="text-xl text-gray-400" />
              <span className="text-customBlue font-semibold ">Workers</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="dashboard/users"
              onClick={()=>setSection("Users")}
              className=" flex w-44 items-center  gap-4
          rounded-md border-2 border-transparent  px-2 py-2 tracking-wide  hover:bg-slate-100 "
            >
              <HiOutlineUsers className="text-xl text-gray-400" />
              <span className="text-customBlue font-semibold  ">Users</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="dashboard/certificates"
              onClick={()=>setSection("Certificates")}
              className=" flex w-44 items-center  gap-4
          rounded-md border-2 border-transparent  px-2 py-2 tracking-wide  hover:bg-slate-100 "
            >
              <TbCertificate className="text-xl text-gray-400" />
              <span className="text-customBlue font-semibold  ">Certificates</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="dashboard/deals"
              onClick={()=>setSection("Deals")}
              className="flex w-44 items-center  gap-4
          rounded-md border-2 border-transparent  px-2 py-2 tracking-wide  hover:bg-slate-100 "
            >
              <MdOutlinePunchClock className="text-xl text-gray-400" />
              <span className="text-customBlue font-semibold ">Deals</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="dashboard/reviews"
              onClick={()=>setSection("Reviews")}
              className=" flex w-44 items-center  gap-4
          rounded-md border-2 border-transparent  px-2 py-2 tracking-wide  hover:bg-slate-100 "
            >
              <AiOutlineComment className="text-xl text-gray-400" />
              <span className="text-customBlue font-semibold ">Reviews</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="dashboard/reports"
              onClick={()=>setSection("Reports")}
              className=" flex w-44 items-center  gap-4
          rounded-md border-2 border-transparent  px-2 py-2 tracking-wide  hover:bg-slate-100 "
            >
              <TbMessageReport className="text-xl text-gray-400" />
              <span className="text-customBlue font-semibold ">Reports</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="dashboard/posts"
              onClick={()=>setSection("Posts")}
              className="  flex w-44 items-center  gap-4
          rounded-md border-2 border-transparent  px-2 py-2 tracking-wide  hover:bg-slate-100 "
            >
              <MdPostAdd className="text-xl text-gray-400" />
              <span className="text-customBlue font-semibold ">Posts</span>
            </NavLink>
          </li>
        </ul>
      </li>
      <li>
        <NavLink
          to="/certificates"
          onClick={()=>setSection("Certificates")}
          className="  flex w-44 items-center  gap-4
          rounded-md border-2 border-transparent  px-2 py-2 tracking-wide  hover:bg-slate-100 "
        >
          <TbCertificate className="text-xl text-gray-400" />
          <span className="text-customBlue font-semibold ">Certificates</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/reports"
          onClick={()=>setSection("Reports")}
          className=" flex w-44 items-center  gap-4
          rounded-md border-2 border-transparent  px-2 py-2 tracking-wide  hover:bg-slate-100 "
        >
          <TbMessageReport className="text-xl text-gray-400" />
          <span className="text-customBlue font-semibold ">Reports</span>
        </NavLink>
      </li>
    </ul>
  );
}

export default Nav;
