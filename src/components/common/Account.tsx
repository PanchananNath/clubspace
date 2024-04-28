"use client";
import { BsPersonCircle, BsKey, BsBoxArrowLeft } from "react-icons/bs";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/app/firebase";
import { useEmailAndName } from "@/contexts/emailAndName";
import Image from "next/image";
import logo from "../../../public/logo.png";
import { ImProfile } from "react-icons/im";
import ChangeUserName from "./changeUserName";
import UpdateEmail from "./updateEmail";
import UpdatePhone from "./addPhone";
import ChangeProfilePic from "./changeProfilePic";
import UpdatePassword from "./updatePassword";
import UpdateResume from "./updateResume";
import DropdownItem from "./dropdownItem";
import { Icon } from "next/dist/lib/metadata/types/metadata-types";

interface DropdownType {
  id: number;
  text: string;
  icon: any;
  state: DropdownState;
}

enum DropdownState {
  none,
  personalDetails,
  securitySettings,
  resume
}

const Account = () => {
  const [dropdownOpen, setDropdownOpen] = useState<DropdownState> (DropdownState.none);
  const [clicked, setClicked] = useState(false);
  const [clickValue, setClickValue] = useState(0);
  const { firstname, lastname, email } = useEmailAndName();
  const router = useRouter();

  const toggleDropdown = (dropdown: DropdownState) => {
    if(dropdownOpen === dropdown) {
      setDropdownOpen(DropdownState.none);
      return;
    }
    setDropdownOpen(dropdown);
  };
  
  const handleDropdownItemClick = (value: React.SetStateAction<number>) => {
    setClickValue(value);
    setClicked(true);
    setDropdownOpen(DropdownState.none);
  };

  const handleLogout = async () => {
    try {
      await auth.signOut();
      router.push("/signin");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const toggleBackToMain = () => {
    setClicked(false);
  };

  const dropdownItems : DropdownType[] = [
    { id: 1, text: "Personal Details", icon: <BsPersonCircle size={20}/>, state : DropdownState.personalDetails},
    { id: 2, text: "Security Settings", icon: <BsKey size={20}/>, state : DropdownState.securitySettings},
    { id: 3, text: "Resume", icon: <ImProfile size={20}/> , state : DropdownState.resume}
  ];
  
  const components: { [key: number]: JSX.Element } = {
    1: <ChangeUserName toggleBackToMain={toggleBackToMain} />,
    2: <UpdateEmail toggleBackToMain={toggleBackToMain} />,
    3: <UpdatePhone toggleBackToMain={toggleBackToMain} />,
    4: <ChangeProfilePic toggleBackToMain={toggleBackToMain} />,
    6: <UpdateResume toggleBackToMain={toggleBackToMain} />,
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

      {clicked ? (
        components[clickValue]
      ) : (
        <div className="w-80 grid gap-1">
          {dropdownItems.map((item) => (
            <DropdownItem
              key={item.id}
              text={item.text}
              icon={item.icon}
              isOpen={item.state === dropdownOpen}
              onClick={() => toggleDropdown(item.state)}
            >
              {item.id === 1 && (
                <div className="w-80 bg-[#B3DCE9]  grid gap-1 px-4 py-2 text-black text-xs items-center cursor-pointer rounded-b-md ">
                  <li
                    onClick={() => handleDropdownItemClick(1)}
                    className="px-8 py-1 rounded-md hover:bg-[#80bed1]"
                  >
                    Change Username
                  </li>
                  <li
                    onClick={() => handleDropdownItemClick(2)}
                    className="px-8 py-1 rounded-md hover:bg-[#80bed1]"
                  >
                    Update Email
                  </li>
                  <li
                    onClick={() => handleDropdownItemClick(3)}
                    className="px-8 py-1 rounded-md hover:bg-[#80bed1]"
                  >
                    Add Phone Number
                  </li>
                  <li
                    onClick={() => handleDropdownItemClick(4)}
                    className="px-8 py-1 rounded-md hover:bg-[#80bed1]"
                  >
                    Change Profile Pic
                  </li>
                </div>
              )}
              {item.id === 2 && (
                <div
                  onClick={() => router.push("./forgotpassword")}
                  className="w-80 bg-[#B3DCE9] grid gap-1 px-4 py-2 text-black text-xs items-center cursor-pointer rounded-b-md"
                >
                  <li
                    onClick={() => handleDropdownItemClick(5)}
                    className="px-8 py-1 rounded-md hover:bg-[#80bed1]"
                  >
                    Change Password
                  </li>
                </div>
              )}
              {item.id === 3 && (
                <div className="w-80 bg-[#B3DCE9] grid gap-1 px-4 py-2 text-black text-xs items-center cursor-pointer rounded-b-md">
                  <li
                    onClick={() => handleDropdownItemClick(6)}
                    className="px-8 py-1 rounded-md hover:bg-[#80bed1]"
                  >
                    Update Resume
                  </li>
                </div>
              )}
            </DropdownItem>
          ))}

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
      )}
    </div>
  );
};

export default Account;
