"use client";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/app/firebase";
import { useRouter } from "next/navigation";
import Image from "next/image";
import logo from "../../../public/logo.png";

export default function MyClubs() {
  const router = useRouter();

  
  return (
    <div>
      <div className="flex-wrap grid gap-3">
       
      <div className="p-5  bg-[#B3DCE9] flex justify-start px-6 items-center rounded-md shadow-md">
        <div className="flex justify-center gap-6 ">
          <Image src={logo} alt="logo" width={30} />
          <p>AI club</p>
        </div>
      </div>
      <div className="p-5 bg-[#B3DCE9] flex justify-start px-6 items-center rounded-md shadow-md">
        <div className="flex justify-center gap-6 ">
          <Image src={logo} alt="logo" width={30} />
          <p>Cyber x Secure club</p>
        </div>
      </div>
      <div className="p-5 bg-[#B3DCE9] flex justify-start px-6 items-center rounded-md shadow-md">
        <div className="flex justify-center gap-6 ">
          <Image src={logo} alt="logo" width={30} />
          <p>Devcom club</p>
        </div>
      </div>

      
    </div>
    
    </div>
    
  );
}
