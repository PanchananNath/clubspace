import { MdEvent } from "react-icons/md";
import { TbBell } from "react-icons/tb";
import Image from "next/image";
import logo from "../../../public/logo.png";
import SideBar from "@/components/common/SideBar";
import ProfileBar from "@/components/common/profilebar";
import ClubCard from "@/components/clubs/clubcard";

export default async function Clubs() {
  try {
    const response = await fetch(
      "http://clubspace.vercel.app/api/getclubsdata",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-cache",
      }
    );

    const data = await response.json();
    // console.log(data);

    return (
      <main className="h-screen flex overflow-hidden bg-primary">
        <SideBar />
        <div className="flex flex-col overflow-y-auto w-full m-1 rounded-lg bg-white px-5">
          <ProfileBar />
          <h1 className="text-2xl text-primary font-bold border-b-2 border-slate-400 mb-3">
            All Clubs
          </h1>
          <div className="grid grid-cols-2 gap-5">
            {data.map((club: any, index: number) => (
              <ClubCard key={index} data={club} />
            ))}
          </div>
        </div>
      </main>
    );
  } catch (error) {
    console.error("Error retrieving data from PostgreSQL:", error);
    return <div>Error</div>;
  }
}
