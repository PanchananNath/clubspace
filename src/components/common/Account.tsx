"use client";
import { BsPersonFillAdd, BsPersonCircle, BsFiletypeDoc, BsKey, BsBoxArrowLeft } from "react-icons/bs";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/app/firebase";
import Navbar from "./navbar";


export default function Account() {
  const [dropdown1Open, setDropdown1Open] = useState(false);
  const [dropdown2Open, setDropdown2Open] = useState(false);
  const [dropdown3Open, setDropdown3Open] = useState(false);
  const router = useRouter();

  const toggleDropdown = (dropdownId: Number) => {
    switch (dropdownId) {
      case 1:
        setDropdown1Open(!dropdown1Open);
        break;
      case 2:
        setDropdown2Open(!dropdown2Open);
        break;
      case 3:
        setDropdown3Open(!dropdown3Open);
        break;
      default:
        break;
    }
  };

  useEffect(() =>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if(!user) {
        console.log('user signed out');
        window.alert('user signed out');
      }
      else {
        window.alert('user not signed out');
      }
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await auth.signOut(); // Sign out the user
      router.push('/signin')
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div className="w-80  static flex-wrap grid gap-1">
      <div className="h-20 w-80  bg-[#B3DCE9] flex justify-start px-6 items-center rounded-md shadow-md">
        
        <div className="flex justify-center gap-6 ">
        <Navbar />
          <BsPersonFillAdd className="text-black" size={40} />
          <div className=" text-black">
            <p className="text-m">UserName</p>
            <p className="text-sm">u22cse@cit.ac80n</p>
          </div>
        </div>
      </div>
      <div className="w-80 ">
        <div
          onClick={() => toggleDropdown(1)}
          className="w-80 h-12 bg-[#EAF7F7] bg-opacity-85 flex justify-start px-6 items-center cursor-pointer rounded-md hover:bg-[#BDDAD9] hover:opacity-100 transition-all duration-300 ease-in-out"
        >
          <p className=" flex justify-between gap-2 text-sm text-black">
            <BsPersonCircle size={20} />
            Personal Details
          </p>
        </div>

        {dropdown1Open && (
          <div className="w-80 bg-[#EAF7F7]  grid gap-1 px-6 py-2 text-black text-xs items-center cursor-pointer ">
            <li className="px-8 py-1 rounded-md hover:bg-[#BDDAD9]">Change Username</li>
            <li className="px-8 py-1 rounded-md hover:bg-[#BDDAD9]">Update Email</li>
            <li className="px-8 py-1 rounded-md hover:bg-[#BDDAD9]">Add Phone Number</li>
            <li className="px-8 py-1 rounded-md hover:bg-[#BDDAD9]">Change Profile Pic</li>
          </div>
        )}
      </div>

      <div className="">
        <div
          onClick={() => toggleDropdown(2)}
          className="w-80 h-12 bg-[#EAF7F7] bg-opacity-85 flex justify-start px-6 items-center rounded-md cursor-pointer  hover:bg-[#BDDAD9] hover:opacity-100 transition-all duration-300 ease-in-out"
        >
          <p className="flex justify-between gap-2 text-sm text-black">
            <BsKey size={20} />
            Security Settings
          </p>
        </div>
        {dropdown2Open && (
          
            <div onClick={() => router.push('./forgotpassword')} className="w-80 bg-[#EAF7F7] grid gap-1 px-6 py-2 text-black text-xs items-center cursor-pointer ">
              <li className="px-8 py-1 rounded-md hover:bg-[#BDDAD9]">Change Password</li>
            </div>
          
        )}
      </div>

      <div className="relative">
        <div
          onClick={() => toggleDropdown(3)}
          className="w-80 h-12 bg-[#EAF7F7] bg-opacity-85 flex justify-start px-6 items-center rounded-md  cursor-pointer hover:bg-[#BDDAD9] hover:opacity-100 transition-all duration-300 ease-in-out"
        >
          <p className="flex justify-between gap-2 text-sm text-black">
            <BsFiletypeDoc size={20} />
            Resume
          </p>
        </div>
        {dropdown3Open && (
          <div className="w-80 bg-[#EAF7F7] grid gap-1 px-6 py-2 text-black text-xs items-center cursor-pointer">
            <li className="px-8 py-1 rounded-md hover:bg-[#BDDAD9]">Update Resume</li>
          </div>
        )}
      </div>

      
        <div onClick={handleLogout} className="w-80 h-12 bg-[#EAF7F7] bg-opacity-85 flex justify-start px-6 items-center rounded-md hover:bg-[#BDDAD9] hover:opacity-100 transition-all duration-300 ease-in-out">
          <p className="flex justify-between gap-2 text-sm text-black">
            <BsBoxArrowLeft size={20} />
            Log out
          </p>
        </div>
      
    </div>
  );
}
