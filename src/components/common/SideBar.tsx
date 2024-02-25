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
import { useState } from "react";

enum Tabs {
  dashboard,
  events,
  allclubs,
  myaccount,
  settings,
}

export default function SideBar() {
  const [activeTab, setActiveTab] = useState<Tabs>(Tabs.dashboard);

  return (
    <aside className="h-screen sm:flex sm:self-start md:flex md:flex-start lg:flex lg:self-start">
      <nav className="h-full hidden w-64 md:flex md:flex-col bg-primary">
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
              route={"/"}
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
              route={"/clubs"}
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
          <SideBarItem
            icon={
              <TbLogout
                className={`${
                  activeTab == Tabs.dashboard ? "text-white" : "text-grey"
                } h-7 w-7`}
              />
            }
            route={"/login"}
            text={"Log Out"}
          />
        </ul>
      </nav>
    </aside>
  );
}
