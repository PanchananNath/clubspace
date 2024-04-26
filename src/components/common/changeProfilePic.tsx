"use client";
import { FaAngleDown } from "react-icons/fa";
import Image from "next/image";
import ProfilePic from '../../../public/profile.webp';

export default function ChangeProfilePic() {
  return (
    <div className="w-80 h-60 bg-[#B3DCE9] rounded-lg">
      <div className="w-80 h-12 bg-[#80bed1] bg-opacity-85 flex justify-start px-6 items-center shadow-lg rounded-lg">
        <p className=" flex justify-between gap-2 text-sm text-black">
          <FaAngleDown size={20} />
          Personal Details/Change Profile Pic
        </p>
      </div>
      <div className="flex justify-center items-center h-4/5">
        <div className="grid gap-1">
          <button className="flex justify-center items-center">
            <Image src={ProfilePic} alt={"profilePic"} width={70} height={70} className="rounded-full" />
          </button>

          <div className="flex justify-center items-center">
            <button className="bg-[#4467a3] hover:bg-[#365486] w-40 text-sm py-1 rounded-md text-white hover:scale-105 duration-300 flex justify-center">
              Upload
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
