"use client";
import { BsPersonCircle, BsKey, BsBoxArrowLeft } from "react-icons/bs";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/app/firebase";
import { useEmailAndName } from "@/contexts/emailAndName";
import Image from "next/image";
import logo from "../../../public/logo.png";
import { ImProfile } from "react-icons/im";

export default function Account() {
  const [dropdown1Open, setDropdown1Open] = useState(false);
  const [dropdown2Open, setDropdown2Open] = useState(false);
  const [dropdown3Open, setDropdown3Open] = useState(false);
  const { firstname, lastname, email } = useEmailAndName();
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

  const handleLogout = async () => {
    try {
      await auth.signOut(); // Sign out the user
      router.push("/signin");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div className="w-80  static flex-wrap grid gap-1">
      <div className="h-20 w-80  bg-[#80bed1] flex justify-start px-6 items-center rounded-md shadow-md">
        <div className="flex items-center gap-3">
          <button className="rounded-full w-14 h-14">
            <Image src={logo} alt={"Profile pic"} className="rounded-full" />
          </button>
          <div className=" text-black">
            <p className="text-md">
              {firstname} {lastname}
            </p>
            <p className="text-xs">{email}</p>
          </div>
        </div>
      </div>
      <div className="w-80 ">
        <div
          onClick={() => toggleDropdown(1)}
          className={`w-80 h-12 ${
            dropdown1Open ? "bg-[#80bed1] rounded-t-md" : "bg-[#B3DCE9]"
          } bg-opacity-85 flex justify-start px-6 items-center cursor-pointer${
            !dropdown1Open
              ? " hover:bg-[#80bed1] rounded-md hover:opacity-100 transition-all duration-300 ease-in-out"
              : ""
          }`}
        >
          <p className=" flex justify-between gap-2 text-sm text-black">
            <BsPersonCircle size={20} />
            Personal Details
          </p>
        </div>

        {dropdown1Open && (
          <div className="w-80 bg-[#B3DCE9]  grid gap-1 px-4 py-2 text-black text-xs items-center cursor-pointer rounded-b-md">
            <li className="px-8 py-1 rounded-md hover:bg-[#80bed1]">
              Change Username
            </li>
            <li className="px-8 py-1 rounded-md hover:bg-[#80bed1]">
              Update Email
            </li>
            <li className="px-8 py-1 rounded-md hover:bg-[#80bed1]">
              Add Phone Number
            </li>
            <li className="px-8 py-1 rounded-md hover:bg-[#80bed1]">
              Change Profile Pic
            </li>
          </div>
        )}
      </div>

      <div className="">
        <div
          onClick={() => toggleDropdown(2)}
          className={`w-80 h-12 ${
            dropdown2Open ? "bg-[#80bed1] rounded-t-md" : "bg-[#B3DCE9]"
          } bg-opacity-85 flex justify-start px-6 items-center cursor-pointer${
            !dropdown2Open
              ? " hover:bg-[#80bed1] rounded-md hover:opacity-100 transition-all duration-300 ease-in-out"
              : ""
          }`}
        >
          <p className="flex justify-between gap-2 text-sm text-black">
            <BsKey size={20} />
            Security Settings
          </p>
        </div>
        {dropdown2Open && (
          <div
            onClick={() => router.push("./forgotpassword")}
            className="w-80 bg-[#B3DCE9] grid gap-1 px-4 py-2 text-black text-xs items-center cursor-pointer rounded-b-md"
          >
            <li className="px-8 py-1 rounded-md hover:bg-[#80bed1]">
              Change Password
            </li>
          </div>
        )}
      </div>

      <div className="relative">
        <div
          onClick={() => toggleDropdown(3)}
          className={`w-80 h-12 ${
            dropdown3Open ? "bg-[#80bed1] rounded-t-md" : "bg-[#B3DCE9]"
          } bg-opacity-85 flex justify-start px-6 items-center cursor-pointer${
            !dropdown3Open
              ? " hover:bg-[#80bed1] rounded-md hover:opacity-100 transition-all duration-300 ease-in-out"
              : ""
          }`}
        >
          <p className="flex justify-between gap-2 text-sm text-black">
            <ImProfile size={20} />
            Resume
          </p>
        </div>
        {dropdown3Open && (
          <div className="w-80 bg-[#B3DCE9] grid gap-1 px-4 py-2 text-black text-xs items-center cursor-pointer rounded-b-md">
            <li className="px-8 py-1 rounded-md hover:bg-[#80bed1]">
              Update Resume
            </li>
          </div>
        )}
      </div>

      <div
        onClick={handleLogout}
        className="w-80 h-12 bg-[#B3DCE9] bg-opacity-85 flex justify-start px-6 items-center rounded-md hover:bg-[#80bed1] hover:opacity-100 transition-all duration-300 ease-in-out"
      >
        <p className="flex justify-between gap-2 text-sm text-black">
          <BsBoxArrowLeft size={20} />
          Log out
        </p>
      </div>
    </div>
  );
}
