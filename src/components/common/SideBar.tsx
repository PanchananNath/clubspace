"use client";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdEvent } from "react-icons/md";
import { PiUsersThreeFill } from "react-icons/pi";
import { MdAccountCircle } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import { TbLogout } from "react-icons/tb";
import Image from "next/image";
import logo from "/public/logo.png";
import SideBarItem from "./SideBarItem";
import { useEffect, useState } from "react";

import { signOut } from "firebase/auth";
import { auth } from "@/app/firebase";
import { useRouter } from "next/navigation";

enum Tabs {
  dashboard,
  events,
  allclubs,
  myaccount,
  settings,
}

export default function SideBar() {
  const [activeTab, setActiveTab] = useState<Tabs>(Tabs.dashboard);
  // const router = useRouter();

  // const handleSignOut = async () => {
  //   try {
  //     await signOut(auth);
  //     router.push("/");
  //     console.log("User signed out");
  //   } catch (error) {
  //     console.error("Error signing out: ", error);
  //   }
  // };
  return (
    <>
      <aside className="h-screen sm:w-80 sm:flex flex-col bg-primary sm:flex-row hidden ">
        <nav className="h-full w-full sm:w-64 flex flex-col bg-primary">
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
            <button onClick={() => setActiveTab(Tabs.dashboard)}>
              <SideBarItem
                icon={<LuLayoutDashboard className="text-white h-7 w-7" />}
                text={"Dashboard"}
                route={"/dashboard"}
                active={activeTab == Tabs.dashboard}
              />
            </button>
            <button onClick={() => setActiveTab(Tabs.events)}>
              <SideBarItem
                icon={
                  <MdEvent
                    className={`${
                      activeTab == Tabs.events ? "text-white" : "text-grey"
                    } h-7 w-7`}
                  />
                }
                route={"/events"}
                text={"Events"}
                active={activeTab == Tabs.events}
              />
            </button>
            <button onClick={() => setActiveTab(Tabs.allclubs)}>
              <SideBarItem
                icon={
                  <PiUsersThreeFill
                    className={`${
                      activeTab == Tabs.allclubs ? "text-white" : "text-grey"
                    } h-7 w-7`}
                  />
                }
                route={"/allclubs"}
                text={"All Clubs"}
                active={activeTab == Tabs.allclubs}
              />
            </button>
            <button onClick={() => setActiveTab(Tabs.myaccount)}>
              <SideBarItem
                icon={
                  <MdAccountCircle
                    className={`${
                      activeTab == Tabs.myaccount ? "text-white" : "text-grey"
                    } h-7 w-7`}
                  />
                }
                route={"/myaccount"}
                text={"My Account"}
                active={activeTab == Tabs.myaccount}
              />
            </button>
          </ul>
          <ul className="flex-0">
            <button onClick={() => setActiveTab(Tabs.settings)}>
              <SideBarItem
                icon={
                  <FiSettings
                    className={`${
                      activeTab == Tabs.settings ? "text-white" : "text-grey"
                    } h-7 w-7`}
                  />
                }
                route={"/settings"}
                text={"Settings"}
                active={activeTab == Tabs.settings}
              />
            </button>
            {/* <SideBarItem
              icon={
                <TbLogout
                  className={`${
                    activeTab == Tabs.dashboard ? "text-white" : "text-grey"
                  } h-7 w-7`}
                />
              }
              route={"/"}
              text={"Log Out"}
            /> */}

            {/* <button
              onClick={handleSignOut}
              className="ml-7 flex text-white justify-center items-center p-2 gap-3"
            >
              <TbLogout className="h-7 w-7" /> Sign Out
            </button> */}
          </ul>
          {/* <li className="m-1 p-3 h-fill w-52 flex">
            {props.icon}
            <span
              className={props.active ? "ml-4 text-white" : "ml-4 text-grey"}
            ></span>
          </li> */}
        </nav>
      </aside>
      <nav className="fixed bottom-0 inset-x-0 h-16 bg-primary sm:hidden flex items-center justify-around">
        <button onClick={() => setActiveTab(Tabs.dashboard)}>Dashboard</button>
        <button onClick={() => setActiveTab(Tabs.events)}>Events</button>
        <button onClick={() => setActiveTab(Tabs.allclubs)}>All Clubs</button>
        <button onClick={() => setActiveTab(Tabs.myaccount)}>My Account</button>
        <button onClick={() => setActiveTab(Tabs.settings)}>Settings</button>
      </nav>
    </>
  );
}
