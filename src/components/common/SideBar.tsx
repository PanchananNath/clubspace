import { LuLayoutDashboard } from "react-icons/lu";
import { MdEvent } from "react-icons/md";
import { PiUsersThreeFill } from "react-icons/pi";
import { MdAccountCircle } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import { TbLogout } from "react-icons/tb";
import { withRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import logo from "/public/logo.png";

export default function SideBar() {
  return (
    <aside className="h-screen">
      <nav className="h-full flex flex-col bg-primary">
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
          />
          <SideBarItem
            icon={<PiUsersThreeFill className="text-white h-7 w-7" />}
            route={"/clubs"}
            text={"All Clubs"}
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

function SideBarItem(props: {
  icon: any;
  text: String;
  route: any;
  active?: boolean;
}) {
  return (
    <li className="m-1 p-3 h-fill w-52 flex">
      <span
        className={
          props.active ? "h-fill w-2 bg-white rounded-xl mr-3" : "bg-black"
        }
      ></span>
      <Link href={props.route} className="flex items-center">
        {props.icon}
        <span className="ml-4 text-white">{props.text}</span>
      </Link>
    </li>
  );
}
