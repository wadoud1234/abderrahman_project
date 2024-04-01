import { HiOutlineHome, HiOutlineUsers } from "react-icons/hi2";
import { TbMessageReport, TbCertificate, TbReportSearch } from "react-icons/tb";
import { GrUserWorker } from "react-icons/gr";
import { MdOutlinePunchClock } from "react-icons/md";
import { AiOutlineComment } from "react-icons/ai";
import { MdPostAdd } from "react-icons/md";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <ul className="space-y-4">
      <li className="border-b pb-2">
        <div className="mb-2 flex items-center gap-2 px-2">
          <HiOutlineHome />
          <span className="font-semibold">Dashboard</span>
        </div>
        <ul className="space-y-2">
          <li className="cursor-pointer">
            <a
              href="https"
              className="flex items-center gap-2 px-2 py-1 tracking-wide"
            >
              <HiOutlineUsers />
              <span className="font-semibold">Users</span>
            </a>
          </li>
          <li>
            <a
              href="https"
              className="hover:bg- flex items-center gap-2 px-2 py-1 tracking-wide"
            >
              <GrUserWorker />
              <span className="font-semibold">Workers</span>
            </a>
          </li>
          <li>
            <a
              href="https"
              className="hover:bg- flex items-center gap-2 px-2 py-1 tracking-wide"
            >
              <TbReportSearch />
              <span className="font-semibold">Applications</span>
            </a>
          </li>
          <li>
            <a
              href="https"
              className="hover:bg- flex items-center gap-2 px-2 py-1 tracking-wide"
            >
              <MdOutlinePunchClock />
              <span className="font-semibold">Deals</span>
            </a>
          </li>
          <li>
            <a
              href="https"
              className="hover:bg- flex items-center gap-2 px-2 py-1 tracking-wide"
            >
              <AiOutlineComment />
              <span className="font-semibold">Reviews</span>
            </a>
          </li>
          <li>
            <a
              href="https"
              className="hover:bg- flex items-center gap-2 px-2 py-1 tracking-wide"
            >
              <TbMessageReport />
              <span className="font-semibold">Reports</span>
            </a>
          </li>
          <li>
            <a
              href="https"
              className="hover:bg- flex items-center gap-2 px-2 py-1 tracking-wide"
            >
              <MdPostAdd />
              <span className="font-semibold">Posts</span>
            </a>
          </li>
        </ul>
      </li>
      <li>
        <a
          href="https"
          className="hover:bg- flex items-center gap-2 px-2 py-1 tracking-wide"
        >
          <TbCertificate />
          <span className="font-semibold">Certificats</span>
        </a>
      </li>
      <li>
        <a
          href="https"
          className="hover:bg- flex items-center gap-2 px-2 py-1 tracking-wide"
        >
          <TbMessageReport />
          <span className="font-semibold">Reports</span>
        </a>
      </li>
    </ul>
  );
}

export default Nav;
