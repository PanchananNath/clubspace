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
  const url1 = "http://clubspace.vercel.app/api/eventsdata";
  const url2 = "http://localhost:3000/api/eventsdata";
  ``;
  const res = await fetch(url2, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  const eventdata = await res.json();
  return (
    <main className="h-screen flex overflow-hidden bg-primary">
      <SideBar />

      <div className="flex flex-col overflow-y-auto w-full m-1 rounded-lg bg-white px-5 custom-scrollbar">
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
