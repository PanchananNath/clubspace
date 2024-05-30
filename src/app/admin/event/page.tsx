import EventCard from "@/components/admin/eventcard";
import SideBar from "@/components/common/SideBar";
import Link from "next/link";
import { IoMdArrowBack } from "react-icons/io";
import { IoAddCircleSharp } from "react-icons/io5";

export default async function AllEvents() {
  const id = "nYObvDBWIIXJzzkUBYTUt3XEnwW2";
  const url =
    process.env.NODE_ENV === "production"
      ? `https://clubspace.vercel.app/api/getclubevents?id=${id}`
      : `http://localhost:3000/api/getclubevents?id=${id}`;

  try {
    const res = await fetch(
      `http://localhost:3000/api/getclubevents?id=${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-cache",
      }
    );
    const data = await res.json();
    console.log(data);
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
              All Events
            </h3>
          </div>
          <Link
            href={"/admin/event/add"}
            className="w-fit text-6xl text-primary hover:text-slate-600 fixed bottom-8 left-[19rem] hover:scale-125"
          >
            <IoAddCircleSharp />
          </Link>
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
