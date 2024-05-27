"use client";
import logo from "../../../public/logo.png";
import Image from "next/image";

import Remainder from "@/components/common/remainder";
import { useEmailAndName } from "@/contexts/emailAndName";
import SideBar from "@/components/common/SideBar";
import ProfileBar from "@/components/common/profilebar";
import Account from "@/components/account/Account";

export default function MyAccountPage() {
  const { firstname } = useEmailAndName();
  return (
    <main className="h-screen flex overflow-hidden bg-primary">
      <SideBar />
      <div className="flex flex-col overflow-y-auto w-full m-1 rounded-lg bg-white px-5 custom-scrollbar">
        <ProfileBar />
        <h1 className="text-2xl text-primary font-bold border-b-2 border-slate-400 mb-3">
          My Account
        </h1>
        <Account />
        <Image
          src={`/logo.png`}
          height={500}
          width={500}
          alt=""
          className="absolute z-0 top-1/2 left-1/2 sm:left-[60%] transform -translate-x-1/2 -translate-y-1/2 opacity-20"
        />
      </div>
    </main>
  );
}
