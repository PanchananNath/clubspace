"use client";
import { AllClubsData } from "@/components/clubs/clubcard";
import { IoMdCloseCircleOutline } from "react-icons/io";
import Image from "next/image";

export interface RegisterFormProps {
  setOpenRegisterForm: (value: boolean) => void;
  //   clubdata: AllClubsData[];
  //   currentclubid: number;
}
export default function RegisterForm({
  setOpenRegisterForm,
}: RegisterFormProps) {
  //   const currentClub = clubdata.find((club) => club.id === currentclubid);
  return (
    <div className="absolute top-0 left-0 h-full w-full bg-black bg-opacity-10 flex justify-center items-center">
      <div className="relative w-full h-full  sm:w-2/3 sm:h-5/6 overflow-hidden bg-secondary rounded-lg">
        <button
          onClick={() => setOpenRegisterForm(false)}
          className="absolute sm:right-1 sm:top-1 right-5 top-5"
        >
          <IoMdCloseCircleOutline className="text-3xl text-blue-500" />
        </button>
        <div className="flex flex-col justify-center items-center py-3 ">
          <h1 className="text-center text-xl font-bold">Registration Form</h1>
          <h3 className="text-sm">
            Penetration Testing Workshop | CyberXSecure Club
          </h3>
        </div>
        <Image
          src={`/logo.png`}
          height={500}
          width={500}
          alt=""
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-20"
        />
        {/* Form Start */}
        <div className="absolute top-1/2 sm:top-[55%] left-1/2 w-full transform -translate-x-1/2 -translate-y-1/2 max-h-[calc(100%-4rem)] overflow-x-auto  custom-scrollbar px-5 sm:px-24 space-y-5 z-50">
          <div className="flex flex-col">
            <span className="text-sm font-semibold">Name</span>
            <input
              type="text"
              name=""
              id=""
              required
              placeholder="Enter name"
              className=" border-b-2 border-blue-300 focus:outline-none hover:border-blue-400 focus:border-blue-400 duration-500 bg-transparent "
            />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold">Roll No</span>
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter Roll No"
              className=" border-b-2 border-blue-300 focus:outline-none hover:border-blue-400 focus:border-blue-400 duration-500 bg-transparent "
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="branch" className="text-sm font-semibold">
              Branch
            </label>
            <div className=" flex justify-between items-center">
              <select
                id="branch"
                name="branch"
                className=" border-b-2 border-blue-300 focus:outline-none hover:border-blue-400 focus:border-blue-400 duration-500 bg-transparent w-full"
              >
                <option value="">Select...</option>
                <option value="branch1">Branch 1</option>
                <option value="branch2">Branch 2</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="year" className="text-sm font-semibold">
              Semester
            </label>
            <div className=" flex justify-between items-center">
              <select
                id="semester"
                name="semester"
                className=" border-b-2 border-blue-300 focus:outline-none hover:border-blue-400 focus:border-blue-400 duration-500 bg-transparent w-full"
              >
                <option value="" className="text-sm font-semibold">
                  Select...
                </option>
                <option value="branch1">Branch 1</option>
                <option value="branch2">Branch 2</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="year" className="text-sm font-semibold">
              Year
            </label>
            <div className=" flex justify-between items-center">
              <select
                id="year"
                name="year"
                className=" border-b-2 border-blue-300 focus:outline-none hover:border-blue-400 focus:border-blue-400 duration-500 bg-transparent w-full"
              >
                <option value="">Select...</option>
                <option value="branch1">Branch 1</option>
                <option value="branch2">Branch 2</option>
              </select>
            </div>
          </div>
          {/* <div className="flex flex-col">
            <label htmlFor="club" className="text-sm font-semibold">
              Club
            </label>
            <div className=" flex justify-between items-center">
              <select
                id="club"
                name="club"
                className=" border-b-2 border-blue-300 focus:outline-none hover:border-blue-400 focus:border-blue-400 duration-500 bg-transparent w-full"
              >
                {clubdata.map((club, index) => (
                  <option key={index} value={club.name}>
                    {club.name}
                  </option>
                ))}
              </select>
            </div>
          </div> */}
          <div className="flex flex-col">
            <span className="text-sm font-semibold">Phone</span>
            <input
              type="tel"
              name=""
              id=""
              placeholder="Enter Phone No"
              className=" border-b-2 border-blue-300 focus:outline-none hover:border-blue-400 focus:border-blue-400 duration-500 bg-transparent "
            />
          </div>
          <div className="flex justify-center">
            <button className="bg-gradient-to-r from-blue-400 via-blue-400 to-blue-700  text-white px-10 py-1 rounded-md hover:from-blue-700 hover:via-blue-400 hover:to-blue-400 mt-10 sm:mt-0">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
