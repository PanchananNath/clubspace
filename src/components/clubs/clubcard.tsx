"use client";
import { useState } from "react";
import Image from "next/image";
import ViewClubDetail from "./viewclubdetail";

export interface AllClubsData {
  id: number;
  name: string;
  vision: string;
  objective: string;
  poster: string;
  start_date: string;
  socialmedia: SocialMedia;
}
interface SocialMedia {
  website: string;
  email: string;
  instagram: string;
  facebook: string;
  linkedin: string;
  phone: string;
}

export interface ClubCardProps {
  data: AllClubsData;
}
export default function ClubCard({ data }: ClubCardProps) {
  // console.log(data.socialmedia);
  const [viewclub, setViewClub] = useState(false);
  return (
    <div className="bg-blue-300 p-3 flex flex-col justify-between rounded-md shadow-lg hover:shadow-blue-500 group">
      <div className="mb-2">
        <div className="h-24 flex gap-3">
          <div className="overflow-hidden rounded-md">
            <Image
              src={data.poster}
              alt={data.name}
              height={500}
              width={500}
              className="w-24 group-hover:scale-110 rounded-m"
            />
          </div>

          <div>
            <h2 className="font-bold text-lg group-hover:text-green-900">
              {data.name}
            </h2>
            <h3 className="text-sm">
              Since {new Date(data.start_date).getFullYear()}
            </h3>
          </div>
        </div>
        <p>{data.objective}</p>
      </div>
      <div className="self-center space-x-5 text-white">
        <button
          onClick={() => setViewClub(true)}
          className="bg-blue-500 px-7 py-1 rounded-lg hover:bg-blue-400"
        >
          View
        </button>
        <button className="bg-blue-500 px-7 py-1 rounded-lg hover:bg-blue-400">
          Join
        </button>
      </div>
      {viewclub ? (
        <ViewClubDetail setViewClub={setViewClub} data={data} />
      ) : null}
    </div>
  );
}
