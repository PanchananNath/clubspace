import EventCard from "@/components/admin/eventcard";
import SideBar from "@/components/common/SideBar";
import Link from "next/link";
import { IoMdArrowBack } from "react-icons/io";

export default async function AllEvents() {
  try {
    const res = await fetch("http://localhost:3000/api/getevents", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);
    return (
      <main className="h-screen flex overflow-hidden bg-primary">
        <SideBar />

        <div className="flex flex-col overflow-y-auto w-full m-1 rounded-lg bg-white p-7 space-y-5">
          <div className="relative flex w-full items-center">
            <Link href="/admin" className="flex items-center gap-1">
              <IoMdArrowBack />
              Back
            </Link>
            <h3 className="absolute left-1/2 transform -translate-x-1/2 text-center text-xl font-semibold text-primary">
              All Events
            </h3>
          </div>
          <div className="grid grid-cols-3 gap-5">
            {data.map((event: any) => {
              return <EventCard data={event} key={event.eventid} />;
            })}
          </div>
        </div>
      </main>
    );
  } catch (err) {
    console.log(err);
  }
}
