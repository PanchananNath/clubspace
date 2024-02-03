import { LuLayoutDashboard } from "react-icons/lu";
import { MdEvent } from "react-icons/md";
import { PiUsersThreeFill } from "react-icons/pi";
import { MdAccountCircle } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import { TbLogout } from "react-icons/tb";

export default function SideBar() {
  return (
    <aside className="h-screen">
      <nav className="h-full flex flex-col bg-primary">
        <div className="p-4 mb-10 flex items-center text-white font-extrabold text-2xl">
          <img
            src="https://logos-download.com/wp-content/uploads/2016/02/BMW_logo_big_transparent_png-700x700.png"
            alt="L"
            className="h-10 w-10"
          />
          <span className="ml-3">Club Space</span>
        </div>
        <ul className="flex-1">
          <SideBarItem
            icon={<LuLayoutDashboard className="text-white h-7 w-7" />}
            text={"Dashboard"}
            active={true}
          />
          <SideBarItem
            icon={<MdEvent className="text-white h-7 w-7" />}
            text={"Events"}
          />
          <SideBarItem
            icon={<PiUsersThreeFill className="text-white h-7 w-7" />}
            text={"All Clubs"}
          />
          <SideBarItem
            icon={<MdAccountCircle className="text-white h-7 w-7" />}
            text={"My Account"}
          />
        </ul>
        <ul className="flex-0">
          <SideBarItem
            icon={<FiSettings className="text-white h-7 w-7" />}
            text={"Settings"}
          />
          <SideBarItem
            icon={<TbLogout className="text-white h-7 w-7" />}
            text={"Log Out"}
          />
        </ul>
      </nav>
    </aside>
  );
}

function SideBarItem(props: { icon: any; text: String; active?: boolean }) {
  return (
    <li className="m-3 p-3 h-fill w-fill ">
      <a href="" className="flex items-center hover:bg-quaternary">
        {props.icon}
        <span className="ml-4 text-white">{props.text}</span>
      </a>
    </li>
  );
}
