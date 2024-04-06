'use client'
import Account from "@/components/common/Account";
import logo from "../../../public/logo.png";
import Image from "next/image";


export default function myaccount() {
 
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

        <div className="px-11 relative mt">
          <h2 className="text-2xl text-[#365486] font-bold">Hello user!</h2>
          <div className="text-2xl text-[#365486] font-bold  mt-20 mb-4">
            My Account
          </div>
          <Account />
          
        </div>
      </div>
    </main>
  );
}
