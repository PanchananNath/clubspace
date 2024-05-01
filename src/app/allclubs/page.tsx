'use client';
import { useEffect, useState } from "react";
import { MdEvent } from "react-icons/md";
import { TbBell } from "react-icons/tb";
import Image from "next/image";
import logo from '../../../public/logo.png';

interface Club {
  id: number;
  name: string;
  poster: string;
  vision: string;
}

export default function Clubs() {
  const [clubs, setClubs] = useState<Club[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchClubData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/allClubsData");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();
        console.log(jsonData); // Get the response as JSON
        setClubs(jsonData); 
      } catch (error:any) {
        setError(error.message);
      }
    };

    fetchClubData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container1 bg-blue-950 w-auto h-screen grid grid-cols-6">
      <div className="sidebar col-span-1"></div>
      <div className="main pt-5 px-5 w-auto h-dvh bg-white text-blue-900 rounded-lg font-san col-span-5 grid">
        <div id="header" className="col-span-full h-10 pt-2 pr-5">
          <div className="flex justify-end items-center gap-3">
            <MdEvent className="h-10 w-10 cursor-pointer" />
            <TbBell className="h-10 w-10 cursor-pointer" />
            <Image
              src={logo}
              alt="logo"
              height={40}
              width={40}
              className="rounded-full border-2 border-black cursor-pointer"
            />
          </div>
          <hr className="m-3 border-black" />
          <h1 className="m-4 font-bold text-3xl">All Clubs</h1>
        </div>

        <div id="content" className="grid grid-cols-2 gap-4 mx-5 mb-5">
          {clubs.map((club) => (
            <div
              className="box1 bg-sky-200 rounded-lg p-4 row-span-4 col-span-1"
              key={club.id} // Correct key reference
            >
              <div className="inline-flex gap-5">
                <Image
                  className="w-20 h-20 rounded-md cursor-pointer"
                  src={club.poster} // Correct poster reference
                  alt="logo"
                  height={80} // Adjust image height
                  width={80} // Adjust image width
                />
                <h2 className="mt-6 font-bold text-gray-700 cursor-pointer">
                  {club.name}
                </h2>
              </div>

              <div className="p-2 row-span-3 content-center">
                <p>{club.vision}</p>
              </div>

              <div className="h-14 row-span-1 pt-3">
                <a href="">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-3">
                    View
                  </button>
                </a>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Join
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
