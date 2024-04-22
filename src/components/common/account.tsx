import React from "react";
import Image from "next/image";
import { MdEvent } from "react-icons/md";
import { TbBell } from "react-icons/tb";
import { FaUser } from "react-icons/fa"; // Importing Font Awesome user icon

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
            <div id="options" className="w-96 bg-blue-200 rounded-md mb-4 p-4">
              <div className="mb-2">
                <p className="text-base text-black mb-1 flex items-center"><FaUser className="mr-2"/>Personal Details/Change Username:</p>
                <div className="flex flex-col">
                  <input type="text" id="oldUsername" className="w-full border border-gray-400 rounded-md p-2 mb-2 focus:outline-none" placeholder="Enter Old Username"/>
                  <input type="text" id="newUsername" className="w-full border border-gray-400 rounded-md p-2 mb-2 focus:outline-none" placeholder="Enter New Username"/>
                </div>
              </div>
              <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Save Changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}