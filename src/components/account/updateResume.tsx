"use client";
import { FaFileUpload } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";

type ToggleBackToMainFunction = () => void;

interface UpdateResumeProps {
  toggleBackToMain: ToggleBackToMainFunction;
}


const UpdateResume: React.FC<UpdateResumeProps> = ({toggleBackToMain}) => {
  return (
    <div className="w-80 h-60 bg-[#B3DCE9] rounded-lg">
      <div className="w-80 h-12 bg-[#80bed1] bg-opacity-85 flex justify-start px-3 items-center shadow-lg rounded-lg">
        <div className="flex justify-center items-center ">
          <button onClick={toggleBackToMain} className="rounded-full hover:bg-[#6AABD2] p-2">
            <IoMdArrowRoundBack size={20} />
          </button>
          <p className="ml-1 flex justify-between text-sm text-black">
            Resume/Update Resume
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center h-4/5">
        <div className="grid gap-2">
          <button className="flex justify-center">
            <FaFileUpload size={40} />
          </button>

          <div className="flex justify-center items-center">
            <button className="bg-[#4467a3] hover:bg-[#365486] w-40 text-sm py-1 rounded-md text-white hover:scale-105 duration-300 flex justify-center">
              Upload File
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateResume;
