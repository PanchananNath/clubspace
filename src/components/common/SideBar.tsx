import { LuLayoutDashboard } from "react-icons/lu";
import { MdEvent } from "react-icons/md";
import { PiUsersThreeFill } from "react-icons/pi";
import { MdAccountCircle } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import { TbLogout } from "react-icons/tb";
import Image from "next/image";
import logo from "/public/logo.png";
import SideBarItem from "./SideBarItem";

export default function SideBar() {
  return (
    <aside className="h-screen flex self-start">
      <nav className="h-full flex flex-col bg-primary border-r-2 border-black">
        <div className="p-4 mb-10 flex items-center text-white font-extrabold text-2xl">
          <Image
            src={logo}
            height={35}
            width={35}
            alt="Logo"
            className="rounded-full"
          />
          <span className="ml-3">Club Space</span>
        </div>
        <ul className="flex-1">
          <SideBarItem
            icon={<LuLayoutDashboard className="text-white h-7 w-7" />}
            text={"Dashboard"}
            route={"/"}
            active={true}
          />
          <SideBarItem
            icon={<MdEvent className="text-white h-7 w-7" />}
            route={"/events"}
            text={"Events"}
            active={false}
          />
          <SideBarItem
            icon={<PiUsersThreeFill className="text-white h-7 w-7" />}
            route={"/clubs"}
            text={"All Clubs"}
            // active={true}
          />
          <SideBarItem
            icon={<MdAccountCircle className="text-white h-7 w-7" />}
            route={"/myaccount"}
            text={"My Account"}
          />
        </ul>
        <ul className="flex-0">
          <SideBarItem
            icon={<FiSettings className="text-white h-7 w-7" />}
            route={"/"}
            text={"Settings"}
          />
          <SideBarItem
            icon={<TbLogout className="text-white h-7 w-7" />}
            route={"/"}
            text={"Log Out"}
          />
        </ul>
      </nav>
    </aside>
  );
}
