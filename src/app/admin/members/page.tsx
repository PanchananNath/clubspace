import EventCard from "@/components/admin/eventcard";
import SideBar from "@/components/common/SideBar";
import Link from "next/link";
import { IoMdArrowBack } from "react-icons/io";
import { IoAddCircleSharp } from "react-icons/io5";

export default function ClubMembers() {
  return (
    <main className="h-screen flex overflow-hidden bg-primary">
      <SideBar />

      <div
        className="flex flex-col overflow-y-auto w-full m-1 rounded-lg bg-white p-7 space-y-5 custom-scrollbar "
        style={{
          backgroundImage: `url("/bglogo.png")`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="relative flex w-full items-center">
          <Link
            href="/admin"
            className="flex items-center gap-1 hover:text-slate-600"
          >
            <IoMdArrowBack />
            Back
          </Link>
          <h3 className="absolute left-1/2 transform -translate-x-1/2 text-center text-xl font-semibold text-primary">
            All Members
          </h3>
        </div>

        <div className="grid grid-cols-3 gap-5"></div>
      </div>
    </main>
  );
}
