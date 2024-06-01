"use client";
import { BiBell } from "react-icons/bi";
import { IoIosLogOut, IoMdCalendar } from "react-icons/io";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { signOut } from "firebase/auth";
import { auth } from "@/app/firebase";
import { useRouter } from "next/navigation";
import ClubCalendar from "../calender";
import Remainder from "./remainder";
import { useEmailAndName } from "@/contexts/emailAndName";

const profilelinks = [
  {
    name: "Profile",
    link: "/profile",
  },
  {
    name: "Resume",
    link: "/resume",
  },
];

export default function ProfileBar() {
  const [hover, setHover] = useState(false);
  const [showCalender, setShowCalender] = useState(false);
  const [showRemainder, setShowRemainder] = useState(false);
  const router = useRouter();
  const { id, firstname, lastname, email, photo } = useEmailAndName();
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      router.push("/");
      console.log("User signed out");
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };
  return (
    <div className="px- py-2 sticky top-0 bg-white">
      <div className="flex justify-end items-center gap-5">
        <div
          onMouseEnter={() => setShowCalender(true)}
          onMouseLeave={() => setShowCalender(false)}
          className=""
        >
          <IoMdCalendar className="text-3xl" />
          {showCalender && <ClubCalendar />}
        </div>
        <div
          onMouseEnter={() => setShowRemainder(true)}
          onMouseLeave={() => setShowRemainder(false)}
          className=""
        >
          <BiBell className="text-3xl" />
          {showRemainder && <Remainder />}
        </div>
        <div
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className="w-10 h-10 relative border-2 hover:border-[#6f9ded] rounded-full border-primary"
        >
          <Image
            src={"/logo.png"}
            alt="name"
            height={500}
            width={500}
            className="rounded-full"
          />
          {hover && (
            <div className="z-50 absolute -right-5 w-48 p-2 bg-blue-100 rounded-lg flex flex-col gap-1 text-slate-500">
              {profilelinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.link}
                  className="hover:text-black hover:bg-slate-300 rounded-md p-1 text-sm"
                >
                  {link.name}
                </Link>
              ))}

              <button
                onClick={handleSignOut}
                className="bg-gradient-to-tr  from-[#6f9ded] to-primary text-white hover:font-semibold hover:from-primary hover:to-[#6f9ded] rounded-md py-1 "
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
