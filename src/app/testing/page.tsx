"use client";
import { BiHappyBeaming } from "react-icons/bi";
import { FaAngleDown, FaFileUpload } from "react-icons/fa";

export default function ChangeProfilePic() {
  return (
    <div className="w-80 h-60 bg-[#B3DCE9] rounded-lg">
      <div className="w-80 h-12 bg-[#80bed1] bg-opacity-85 flex justify-start px-6 items-center shadow-lg rounded-lg">
        <p className=" flex justify-between gap-2 text-sm text-black">
          <FaAngleDown size={20} />
          Resume/Update Resume
        </p>
      </div>
      <div className="flex justify-center items-center h-4/5 ">
    <div className="grid gap-2 bg-[#BEC4ED] opacity-90 p-4">
        <div className="flex justify-center items-center">
            <BiHappyBeaming className="text-black" size={60} />
        </div>
        <p className="text-black font-semibold">Upload Success!!</p>
    </div>
</div>

    </div>
  );
}
