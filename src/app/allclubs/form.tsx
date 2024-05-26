"use client";
import { AllClubsData } from "@/components/clubs/clubcard";
import { IoMdCloseCircleOutline } from "react-icons/io";

export interface ViewClubDetailProps {
  setJoinFormView: (value: boolean) => void;
  clubdata: AllClubsData[];
  currentclubid: number;
}
export default function JoinForm({
  setJoinFormView,
  clubdata,
  currentclubid,
}: ViewClubDetailProps) {
  const currentClub = clubdata.find((club) => club.id === currentclubid);
  return (
    <div className="absolute top-0 left-0 h-full w-full bg-black bg-opacity-20 flex justify-center items-center">
      <div className="relative w-2/3 h-5/6 overflow-hidden bg-blue-200 rounded-lg">
        <button
          onClick={() => setJoinFormView(false)}
          className="z-50 absolute right-1 top-1"
        >
          <IoMdCloseCircleOutline className="text-3xl text-blue-500" />
        </button>
        <h1 className="text-center text-xl font-bold py-3">
          Club Joining Form
        </h1>
        {/* Form Start */}
        <div className="max-h-[calc(100%-4rem)] overflow-x-auto  custom-scrollbar  p-2 space-y-5 pb-2">
          <div className="grid grid-cols- gap-2">
            <div className=" flex justify-between items-center">
              <span>Name</span>
              <input
                type="text"
                className="w-5/6 py-1  px-2 rounded-md border-[3px] border-white focus:outline-none hover:border-blue-400 focus:border-blue-400 duration-500"
              />
            </div>
            <div className=" flex justify-between items-center">
              <span>Roll No</span>
              <input
                type="text"
                className="w-5/6 py-1  px-2 rounded-md border-[3px] border-white focus:outline-none hover:border-blue-400 focus:border-blue-400 duration-500"
              />
            </div>
          </div>
          <div className="flex justify-between  ">
            <label htmlFor="branch">Branch</label>
            <div className="grid grid-cols-3 w-5/6 gap-5  ">
              <div className=" flex justify-between items-center">
                <select
                  id="branch"
                  name="branch"
                  className="w-5/6 py-1  px-2 rounded-md border-[3px] border-white focus:outline-none hover:border-blue-400 focus:border-blue-400 duration-500"
                >
                  <option value="">Select...</option>
                  <option value="branch1">Branch 1</option>
                  <option value="branch2">Branch 2</option>
                  {/* Add more options as needed */}
                </select>
              </div>
              <div className=" flex justify-between items-center gap-2    ">
                {" "}
                <label htmlFor="branch">Semester</label>
                <select
                  id="branch"
                  name="branch"
                  className="w-5/6 py-1  px-2 rounded-md border-[3px] border-white focus:outline-none hover:border-blue-400 focus:border-blue-400 duration-500"
                >
                  <option value="">Select...</option>
                  <option value="branch1">Branch 1</option>
                  <option value="branch2">Branch 2</option>
                  {/* Add more options as needed */}
                </select>
              </div>
              <div className=" flex justify-between items-center gap-2">
                <label htmlFor="branch">Year</label>
                <select
                  id="branch"
                  name="branch"
                  className="w-5/6 py-1  px-2 rounded-md border-[3px] border-white focus:outline-none hover:border-blue-400 focus:border-blue-400 duration-500"
                >
                  <option value="">Select...</option>
                  <option value="branch1">Branch 1</option>
                  <option value="branch2">Branch 2</option>
                  {/* Add more options as needed */}
                </select>
              </div>
            </div>
          </div>
          <div className="grid grid-cols- gap-2">
            <div className=" flex justify-between items-center gap-2">
              <label htmlFor="branch">Club</label>
              <select
                id="branch"
                name="branch"
                className="w-5/6 py-1  px-2 rounded-md border-[3px] border-white focus:outline-none hover:border-blue-400 focus:border-blue-400 duration-500"
                defaultValue={currentClub ? currentClub.name : ""}
              >
                {clubdata.map((club, index) => (
                  <option key={index} value={club.name}>
                    {club.name}
                  </option>
                ))}
              </select>
            </div>
            <div className=" flex justify-between items-center gap-2">
              <span>Contact No</span>
              <input
                type="tel"
                name=""
                id=""
                className="w-5/6 py-1  px-2 rounded-md border-[3px] border-white focus:outline-none hover:border-blue-400 focus:border-blue-400 duration-500"
              />
            </div>
            <div className=" flex justify-between items-center gap-2">
              <span>Email</span>
              <input
                type="email"
                name=""
                id=""
                className="w-5/6 py-1  px-2 rounded-md border-[3px] border-white focus:outline-none hover:border-blue-400 focus:border-blue-400 duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
