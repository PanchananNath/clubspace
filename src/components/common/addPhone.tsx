"use client";
import { FaAngleDown } from "react-icons/fa";

export default function UpdatePhone() {
  return (
    <div className="w-80 h-60 bg-[#B3DCE9] rounded-lg">
      <div className="w-80 h-12 bg-[#80bed1] bg-opacity-85 flex justify-start px-6 items-center shadow-lg rounded-lg">
        <p className=" flex justify-between gap-2 text-sm text-black">
          <FaAngleDown size={20} />
          Personal Details/Add Phone Number
        </p>
      </div>
      <div className="flex justify-center items-center h-4/5">
        <div className="grid gap-2">
          <input
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            autoComplete="tel"
            required
            className="p-1 px-2 text-sm rounded-md border"
          />
          <div className="flex justify-center items-center">
            <button className="bg-[#4467a3] hover:bg-[#365486] w-40 text-sm py-1 rounded-md text-white hover:scale-105 duration-300 flex justify-center">
              Add phone
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
