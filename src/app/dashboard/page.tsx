"use client";
import React from "react";
import { useEffect, useState } from "react";
import { useEmailAndName } from "@/contexts/emailAndName";
import SideBar from "@/components/common/SideBar";
import ProfileBar from "@/components/common/profilebar";
import PopupForm from "@/components/account/popupForm";
import CustomSpinner from "@/components/spinner";
import Image from "next/image";

export default function DashboardPage() {
  const [showPopup, setShowPopup] = useState(false);
  const { id, firstname } = useEmailAndName();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Only stop loading if id and firstname are not null
    if (id !== null && firstname !== null) {
      setLoading(false);
      setTimeout(() => {
        setShowPopup(id === null); //id is null, means user is not registered in the database
      }, 5000); // Delay of x seconds
    }
  }, [id, firstname]); // Add firstname to the dependency array

  return (
    <main className="h-screen flex overflow-hidden bg-primary">
      <SideBar />
      <div
        className="flex flex-col overflow-y-auto w-full m-1 rounded-lg bg-white px-5"
        style={{
          backgroundImage: `url("/logo.png")`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <ProfileBar />
        {firstname && (
          <h1 className="text-3xl text-primary font-semibold p-3">
            Welcome{" "}
            <span className="font-bold text-blue-600">{firstname}!</span>
          </h1>
        )}
        {/* <Image
          src={`/logo.png`}
          height={500}
          width={500}
          alt=""
          className="absolute z-0 top-1/2 left-1/2 sm:left-[60%] transform -translate-x-1/2 -translate-y-1/2 opacity-20"
        /> */}
        {loading && <CustomSpinner />}
        {showPopup && <PopupForm setShowPopup={setShowPopup} />}
      </div>
    </main>
  );
}
