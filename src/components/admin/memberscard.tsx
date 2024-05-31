"use client";
import { useUid } from "@/contexts/id";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function MemberCard() {
  const { uid } = useUid();
  const [total_members, setTotalMembers] = useState(0);
  console.log("uid: ", uid);
  useEffect(() => {
    if (!uid) {
      return; // Exit early if uid is null
    }

    const fetchdata = async () => {
      try {
        // Check if total_members is already stored in session storage
        const storedTotalMembers = sessionStorage.getItem("total_members");
        if (storedTotalMembers) {
          setTotalMembers(Number(storedTotalMembers));
          return; // Exit early if total_members is already stored
        }

        const response = await fetch(
          `http://localhost:3000/api/getclubid?id=${uid}`,
          { method: "GET" }
        );
        if (response.ok) {
          const jsonData = await response.json();
          setTotalMembers(jsonData.total_users);
          // Store total_members in session storage
          sessionStorage.setItem("total_members", jsonData.total_users);
        }
      } catch (error) {
        console.error("Error: ", error);
      }
    };
    fetchdata();
  }, [uid]);

  return (
    <Link href="/admin/members">
      <div className="bg-secondary h-28 flex flex-col justify-center items-center gap-5 shadow-md shadow-primary hover:scale-105">
        <span className="text-xl text-primary font-semibold">CLUB MEMBERS</span>
        <span className="text-2xl font-semibold text-red-500 animate-bounce">
          {total_members}
        </span>
      </div>
    </Link>
  );
}
