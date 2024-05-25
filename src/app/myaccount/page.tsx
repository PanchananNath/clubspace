"use client";
import Account from "@/components/common/Account";
import logo from "../../../public/logo.png";
import Image from "next/image";
import Calendar from "@/components/common/calendar";
import Remainder from "@/components/common/remainder";
import { useEmailAndName } from "@/contexts/emailAndName";
import SideBar from "@/components/common/SideBar";

export default function MyAccountPage() {
  const { firstname } = useEmailAndName();
  return (
    <main className="flex w-full items-center justify-center p-1">
      <SideBar />
      <div className="bg-white relative h-screen w-full rounded-2xl bg-static">
        <Image
          alt="Mountains"
          src={logo}
          placeholder="blur"
          quality={100}
          fill
          sizes="100vw"
          className="fixed top-0 left-0 w-full h-full z-0 object-contain opacity-30"
        />

        <div className="px-11 relative mt-16 h-5/6">
          <h2 className="text-2xl text-[#365486] font-bold">
            Hello {firstname}!
          </h2>

          <div className="bg-[#DCF2F1] h-auto pt-10 p-7 mb-5 z-10  rounded-2xl bg-opacity-70 flex justify-between flex-wrap">
            <div className="">
              <div className="text-2xl text-[#365486] font-bold mb-4 ">
                My Account
              </div>

              <Account />
            </div>
            <div className="grid gap-4">
              <Calendar />
              <Remainder />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
