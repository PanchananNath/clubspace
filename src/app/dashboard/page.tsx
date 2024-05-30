"use client";
import React from "react";
import { useEffect, useState } from "react";
import { useEmailAndName } from "@/contexts/emailAndName";
import SideBar from "@/components/common/SideBar";
import ProfileBar from "@/components/common/profilebar";
import PopupForm from "@/components/account/popupForm";
import CustomSpinner from "@/components/spinner";
import Image from "next/image";
import Alert from "@/components/account/alert";

export default function DashboardPage() {
  const [showPopup, setShowPopup] = useState(false);
  const { id, firstname } = useEmailAndName();
  const [loading, setLoading] = useState(true);
  const [alertMessage, setAlertMessage] = useState<string | null>(null);

  useEffect(() => {
    // Start a timer
    const timer = setTimeout(() => {
      if (id === null || firstname === null) {
        setAlertMessage("Check your internet connection and try again.");
        setLoading(false);
      }
    }, 5000); // 5 seconds

    // Only stop loading if id and firstname are not null
    if (id !== null && firstname !== null) {
      setLoading(false);
      clearTimeout(timer); // Clear the timer if id and firstname are fetched
      setShowPopup(id === null); // id is null, means user is not registered in the database
    }

    // Clear the timer when the component unmounts or when the dependencies change
    return () => {
      clearTimeout(timer);
      console.log("useEffect stopped after 5 seconds");
    };
  }, [id, firstname]); // Add firstname to the dependency array

  return (
    <main className="h-screen flex overflow-hidden bg-primary">
      <SideBar />
      {alertMessage && (
        <Alert
          message={alertMessage}
          onClose={() => setAlertMessage(null)}
          ClassName="fixed top-0 bg-black bg-opacity-20 h-full w-full z-50 flex justify-end items-end"
        />
      )}
      <div
        className="flex flex-col overflow-y-auto w-full m-1 rounded-lg bg-white px-5"
        style={{
          backgroundImage: `url("/bglogo.png")`,
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
