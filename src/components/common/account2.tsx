import React from "react";
import Image from "next/image";
import { MdEvent } from "react-icons/md";
import { TbBell } from "react-icons/tb";
import { FaUser, FaFileAlt } from "react-icons/fa"; // Importing Font Awesome user and file icons

export default function Account() {
  return (
    <div style={{ backgroundImage: 'url(./images/Background.png)', backgroundSize: 'cover', minHeight: '100vh' }}>
      <div id="main" className="min-h-screen min-w-screen bg-white mx-auto px-5 text-blue-700 font-sans grid grid-cols-5 grid-rows-10 justify-end">
        <header className="flex justify-between items-center col-span-full row-span-1">
          <p className="inline-block text-2xl mt-5 ml-5">Hello User!</p>
          <div className="w-fill h-18  flex justify-end pr-10">
            <MdEvent className="h-10 w-10 text-black mr-3"/>
            <TbBell className="h-10 w-10 text-black font-bold mr-3"/>
            <img src="http://upload.wikimedia.org/wikipedia/commons/d/d4/Cat_March_2010-1a.jpg" alt="" className="rounded-full h-10 w-10"/>
          </div>
        </header>
        <div id="content" className="ml-5 col-start-1 col-span-2 row-span-6">
          <h2 className="text-2xl mt-10 mb-10">My Account</h2>
          <a href="#" target="_blank" className="block">
            <div id="club" className="w-96 h-24 bg-blue-300 flex justify-start items-center rounded-md mb-6">
              <img src="http://upload.wikimedia.org/wikipedia/commons/d/d4/Cat_March_2010-1a.jpg" alt="logo" className="w-20 h-20 rounded-full ml-3 mr-2"/>
              <p className="text-base text-black">UserName <br /> u22cse436@cit.ac.in</p>
            </div>
          </a>
          <div className="block">
            <div id="options" className="w-96 rounded-md mb-4 p-1">
              <div className="mb-2 bg-blue-200 rounded-md p-4">
                <p className="text-base text-black mb-1 flex items-center"><FaUser className="mr-2"/>Security Settings/Change Password:</p>
                <div className="flex items-center justify-center mb-4">
                  <FaFileAlt className="text-5xl text-blue-700 mr-2" />
                </div>
                <p className="text-lg text-center">Successfully Uploaded</p>
              </div>
              <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mt-4">Go Back</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}