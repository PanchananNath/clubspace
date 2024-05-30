"use client";
import { BiCommentDetail } from "react-icons/bi";
import Image from "next/image";
import LikeButton from "../likeButton";
import { useState } from "react";
import Query from "./query";
import RegisterForm from "@/app/events/form";
import { EventsData } from "@/app/events/page";

const Events: React.FC<{ data: EventsData }> = ({ data }) => {
  const [query, setOpenQuery] = useState(false);
  const [registerform, setOpenRegisterForm] = useState(false);
  // console.log(event);
  return (
    <div className="bg-secondary bg-opacity-90 p-3 m-5 rounded-xl hover:shadow-lg hover:shadow-blue-500 shadow-md shadow-primary">
      <div className="flex items-center mb-2">
        <Image
          src={data.clublogo || "/logo.png"}
          alt="logo"
          height={40}
          width={40}
          className="mr-3"
        />

        <h1 className="font-bold">{data.name} </h1>
      </div>

      <p>{data.description}</p>

      <div className="flex justify-center items-center mb-5 mt-5">
        <Image
          src={"/logo.png"}
          alt="logo"
          height={400}
          width={350}
          className="border border-black"
        />
      </div>
      <hr className="border-black" />
      <div className="flex justify-evenly items-center mt-5 mb-5">
        <span className="bg-primary p-2 w-32   flex items-center justify-center gap-3 rounded-lg">
          <LikeButton />
        </span>
        <button
          onClick={() => setOpenQuery(!query)}
          className="bg-primary flex items-center p-2 w-32 justify-center gap-3 text-white rounded-lg"
        >
          <BiCommentDetail />
          Query
        </button>
        <button
          onClick={() => setOpenRegisterForm(!registerform)}
          className="bg-primary p-2 w-32 text-white rounded-lg"
        >
          Register
        </button>
      </div>

      {query && <Query setOpenQuery={setOpenQuery} />}
      {registerform && (
        <RegisterForm setOpenRegisterForm={setOpenRegisterForm} data={data} />
      )}
    </div>
  );
};

export default Events;
