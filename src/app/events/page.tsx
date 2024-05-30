import SideBar from "@/components/common/SideBar";
import ProfileBar from "@/components/common/profilebar";
import Events from "@/components/events/Events";
import Image from "next/image";

export interface EventsData {
  eventid: number;
  name: string;
  poster: string;
  venue: string;
  dateTime: Date;
  description: string;
  registrationUrl: string;
  qrCode: string;
  clubname: string;
  clublogo: string;
}

export default async function Home() {
  try {
    const url =
      process.env.NODE_ENV === "production"
        ? "https://clubspace.vercel.app/api/geteventsone"
        : "http://localhost:3000/api/geteventsone";
    const res = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    if (res.status === 404) {
      // Handle 404 error here
      console.error("Error: Not Found");
      return;
    }
    const eventdata = await res.json();
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
            Events
          </h1>{" "}
          {Array.isArray(eventdata) &&
            eventdata.map((event: EventsData) => (
              <Events key={event.eventid} data={event} />
            ))}
          {/* <Image
          src={`/logo.png`}
          height={500}
          width={500}
          alt=""
          className="absolute z-0 top-1/2 left-1/2 sm:left-[60%] transform -translate-x-1/2 -translate-y-1/2 opacity-20"
        /> */}
        </div>
      </main>
    );
  } catch (error) {
    console.error("Error retrieving data from PostgreSQL:", error);
    return (
      <div className="h-screen w-full flex justify-center items-center">
        <div>Error: {error as React.ReactNode}</div>
      </div>
    );
  }
}
