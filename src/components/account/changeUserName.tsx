"use client";
import { FaAngleDown } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";

type ToggleBackToMainFunction = () => void;

interface ChangeUserNameProps {
  toggleBackToMain: ToggleBackToMainFunction;
}


const ChangeUserName: React.FC<ChangeUserNameProps> = ({toggleBackToMain}) => {
  return (
    <div className="w-80 h-60 bg-[#B3DCE9] rounded-lg">
      <div className="w-80 h-12 bg-[#80bed1] bg-opacity-85 flex justify-start px-3 items-center shadow-lg rounded-lg">
      <div className="flex justify-center items-center ">
          <button onClick={toggleBackToMain} className="rounded-full hover:bg-[#6AABD2] p-2">
            <IoMdArrowRoundBack size={20} />
          </button>
          <p className="ml-1 flex justify-between text-sm text-black">
            Personal Details/Change Username
          </p>
        </div>
      </div>
        <div className="flex justify-center items-center h-4/5">
        <div className="grid gap-2">
        <input
          type="text"
          name="oldUsername"
          placeholder="Enter old username"
          autoComplete="username"
          required
          className="p-1 px-2 text-sm rounded-md border"
        />
        <input
          type="text"
          name="newUsername"
          placeholder="Enter new username"
          autoComplete="username"
          required
          className="p-1 px-2 text-sm rounded-md border"
        />
        <div className="flex justify-center items-center">
          <button className="bg-[#4467a3] hover:bg-[#365486] w-40 text-sm py-1 rounded-md text-white hover:scale-105 duration-300 flex justify-center">
            Save Changes
          </button>
        </div>
      </div>
        </div>
      
    </div>
  );
}

export default ChangeUserName;
