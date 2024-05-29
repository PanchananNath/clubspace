"use client";
import { useState } from "react";
import Image from "next/image";
import ViewClubDetail from "./viewclubdetail";
import JoinForm from "@/app/allclubs/form";

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
  allclubsdata: AllClubsData[];
}
export default function ClubCard({ data, allclubsdata }: ClubCardProps) {
  const [viewclub, setViewClub] = useState(false);
  const [joinform, setOpenJoinForm] = useState(false);
  return (
    <div className="bg-secondary p-3 flex flex-col justify-between rounded-lg shadow-lg hover:shadow-blue-500 group bg-opacity-90">
      <div className="mb-2">
        <div className="h-24 flex gap-3">
          <div className="overflow-hidden rounded-md">
            {data.poster ? (
              <Image
                src={data.poster}
                alt={data.name}
                height={500}
                width={500}
                className="w-24 group-hover:scale-110 rounded-m"
              />
            ) : (
              <Image
                src={`/logo.png`}
                alt={data.name}
                height={500}
                width={500}
                className="w-24 group-hover:scale-110 rounded-m"
              />
            )}
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
          className="bg-primary px-7 py-1 rounded-lg hover:bg-blue-400"
        >
          View
        </button>
        <button
          onClick={() => setOpenJoinForm(true)}
          className="bg-primary px-7 py-1 rounded-lg hover:bg-blue-400"
        >
          Join
        </button>
      </div>
      {viewclub ? (
        <ViewClubDetail setViewClub={setViewClub} data={data} />
      ) : null}
      {joinform ? (
        <JoinForm
          currentclubid={data.id}
          clubdata={allclubsdata}
          setJoinFormView={setOpenJoinForm}
        />
      ) : null}
    </div>
  );
}
