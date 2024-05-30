"use client";
import { useEmailAndName } from "@/contexts/emailAndName";
import SideBar from "@/components/common/SideBar";
import ProfileBar from "@/components/common/profilebar";
import Account from "@/components/account/Account";

export default function MyAccountPage() {
  const { firstname } = useEmailAndName();
  return (
    <main className="h-screen flex overflow-hidden bg-primary">
      <SideBar />
      <div
        className="flex flex-col overflow-y-auto w-full m-1 rounded-lg bg-white px-5 custom-scrollbar"
        style={{
          backgroundImage: `url("/bglogo.png")`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <ProfileBar />
        <h1 className="text-2xl text-primary font-bold border-b-2 border-slate-400 mb-3">
          My Account
        </h1>
        <Account />
      </div>
    </main>
  );
}
