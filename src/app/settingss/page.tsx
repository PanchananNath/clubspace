"use client";
import logo from "../../../public/logo.png";
import Image from "next/image";

import { FiSettings } from "react-icons/fi";

export default function SettingsPage() {


  return (
    <main className="flex w-full items-center justify-center p-1">
      
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
          <div className="flex items-center gap-2">
            <FiSettings size={20} style={{ fontWeight: '', color: '#365486'}} />
            <h2 className="text-2xl text-[#365486] font-bold">Settings</h2>
          </div>

          <div className="bg-[#DCF2F1] h-auto pt-10 p-7 mb-5 z-10  rounded-2xl bg-opacity-70 flex justify-between flex-wrap">
              <div className="">
                <div className="text-2xl text-[#365486] font-bold mb-4 ">
                  My Account
                </div>

              </div>
              <div className="grid gap-4">
                
              </div>
            </div>
        </div>
      </div>
    </main>
  );
}