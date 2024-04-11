'use client'
import Account from "@/components/common/Account";
import logo from "../../../public/logo.png";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useUid } from "@/contexts/store";


export default function myaccount() {
  const [name, setname] = useState<string | null>('');
  const { uid } = useUid();

  useEffect(() => {
    //console.log("uid: ",uid);
    const fetchid = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/getdata?id=${uid}`,
          {
            method: "GET",
          }
        );
        if (response.ok) {
          const jsonData = await response.json();
          if (jsonData.length > 0) {
            setname(jsonData[0].firstname);
          }
        } else {
          console.error("Error fetching data:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (uid) {
      fetchid();
    }
  }, [uid]);
 
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
            <h2 className="text-2xl text-[#365486] font-bold">Hello {name}!</h2>
            <div className="bg-[#DCF2F1] h-auto pt-10 p-7 mb-5 z-10  rounded-2xl bg-opacity-70 flex justify-between flex-wrap">
              <div className="">
                <div className="text-2xl text-[#365486] font-bold mb-4 ">
                  My Clubs
                </div>

                <Account />
              </div>
              <div className="grid gap-4">
                
              </div>
            </div>
          </div>
      </div>
    </main>
  );
}
