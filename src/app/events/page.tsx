import Events from "@/components/Events";
import SideBar from "@/components/common/SideBar";
import ProfileBar from "@/components/common/profilebar";

export interface Events {
  eventid: number;
  name: string;
  poster: string;
  venue: string;
  dateTime: Date;
  description: string;
  registrationUrl: string;
  qrCode: string;
}

export default async function Home() {
  const res = await fetch("http://clubspace.vercel.app/api/eventsdata", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-cache",
  });
  const eventdata = await res.json();
  return (
    <main className="h-screen flex overflow-hidden bg-primary">
      <SideBar />

      <div className="flex flex-col overflow-y-auto w-full m-1 rounded-lg bg-white px-5">
        <ProfileBar />
        <h1 className="text-2xl text-primary font-bold border-b-2 border-slate-400">
          Events
        </h1>
        {eventdata.map((event: Events) => (
          <Events key={event.eventid} event={event} />
        ))}
      </div>
    </main>
  );
}
