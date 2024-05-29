"use client";
import Link from "next/link";
import { useState } from "react";
import { IoMdArrowBack } from "react-icons/io";

export default function EventForm() {
  const [qrCodeFileName, setQrCodeFileName] = useState("Choose File");
  const [posterFileName, setPosterFileName] = useState("Choose File");

  const handleQrCodeFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setQrCodeFileName(e.target.files[0].name);
    }
  };

  const handlePosterFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setPosterFileName(e.target.files[0].name);
    }
  };

  return (
    <div className="w-full h-full space-y-5 p-7">
      <div className="relative flex w-full items-center">
        <Link href="/admin" className="flex items-center gap-1">
          <IoMdArrowBack />
          Back
        </Link>
        <h3 className="absolute left-1/2 transform -translate-x-1/2 text-center text-xl font-semibold text-primary">
          Create Event
        </h3>
      </div>
      {/* Form */}
      <div className=" bg-secondary p-7 rounded-md space-y-3">
        <div className="flex flex-col">
          <span className="text-sm font-semibold">Event Name</span>
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter Event Name"
            className=" border-b-2 border-blue-200 focus:outline-none hover:border-blue-400 focus:border-blue-400 duration-500 bg-transparent"
          />
        </div>
        <div className="grid grid-cols-2 gap-10">
          <div className="flex flex-col">
            <span className="text-sm font-semibold">Venue</span>
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter Venue"
              className=" border-b-2 border-blue-200 focus:outline-none hover:border-blue-400 focus:border-blue-400 duration-500 bg-transparent "
            />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold">Date & Time</span>
            <input
              type="datetime-local"
              name=""
              id=""
              placeholder="Enter Roll No"
              className=" border-b-2 border-blue-200 focus:outline-none hover:border-blue-400 focus:border-blue-400 duration-500 bg-transparent "
            />
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-semibold">Description</span>
          <textarea
            name=""
            id=""
            placeholder="Enter Description"
            className=" border-b-2 border-blue-200 focus:outline-none hover:border-blue-400 focus:border-blue-400 duration-500 bg-transparent h-52 custom-scrollbar resize-none"
          />
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-semibold">Registration Url</span>
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter Registration Url"
            className=" border-b-2 border-blue-200 focus:outline-none hover:border-blue-400 focus:border-blue-400 duration-500 bg-transparent"
          />
        </div>
        <div className="grid grid-cols-2 gap-10">
          <div className="flex flex-col">
            <span className="text-sm font-semibold">QR Code</span>
            <label
              htmlFor="fileUpload"
              className="border-b-2 border-blue-200 focus:outline-none hover:border-blue-400 focus:border-blue-400 duration-500 bg-transparent py-1"
            >
              <span className="bg-gradient-to-tr from-blue-400 to-blue-600 hover:from-blue-600 hover:to-blue-400 text-white px-2 py-1 rounded-md mr-1">
                Choose File
              </span>
              {qrCodeFileName}
            </label>
            <input
              type="file"
              name="qr_code"
              id="fileUpload"
              placeholder="Enter Venue"
              className="hidden"
              onChange={handleQrCodeFileChange}
            />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold">Poster</span>
            <label
              htmlFor="posterUpload"
              className="border-b-2 border-blue-200 focus:outline-none hover:border-blue-400 focus:border-blue-400 duration-500 bg-transparent py-1"
            >
              <span className="bg-gradient-to-tr from-blue-400 to-blue-600 hover:from-blue-600 hover:to-blue-400 text-white px-2 py-1 rounded-md mr-1">
                Choose File
              </span>
              {posterFileName}
            </label>
            <input
              type="file"
              name="poster"
              id="posterUpload"
              placeholder="Enter Venue"
              className="hidden"
              onChange={handlePosterFileChange}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <button className="bg-gradient-to-r from-blue-400 via-blue-400 to-blue-700  text-white px-10 py-2 rounded-md hover:from-blue-700 hover:via-blue-400 hover:to-blue-400  sm:mt-0">
          Submit
        </button>
      </div>
    </div>
  );
}
