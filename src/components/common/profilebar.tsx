"use client";
import { BiBell } from "react-icons/bi";
import { IoIosLogOut, IoMdCalendar } from "react-icons/io";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { signOut } from "firebase/auth";
import { auth } from "@/app/firebase";
import { useRouter } from "next/navigation";

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
  const router = useRouter();
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
        <IoMdCalendar className="text-3xl" />
        <BiBell className="text-3xl" />
        <div
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className="w-10 h-10 relative hover:border-2 hover:border-green-500 rounded-full"
        >
          <Image
            src={`/logo.png`}
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
                  className="hover:text-black hover:bg-slate-300"
                >
                  {link.name}
                </Link>
              ))}
              <button
                onClick={handleSignOut}
                className="bg-gradient-to-tr from-blue-200 to-blue-500 text-black hover:font-semibold hover:from-blue-500 hover:to-blue-200 rounded-md hover:text-white py-1 "
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
