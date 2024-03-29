import Events from "@/components/Events";
import { sql } from "@vercel/postgres";
import { MdEvent } from "react-icons/md";
import { TbBell } from "react-icons/tb";
import Image from "next/image";

export default async function Event() {
  await sql`DISCARD ALL;`;
  const { rows } =
    await sql`SELECT eventid,name, poster, venue, date_time, description, registration_url, qr_code FROM events;`;
  console.log(rows);

  return (
    <main className="flex h-screen w-full items-center justify-center p-1">
      <div className="h-screen w-full bg-white relative overflow-y-scroll rounded-2xl ">
        <div className="h-content w-full bg- p-5">
          {/* ***********************Header*********************** */}
          <div className="flex justify-end items-center gap-3">
            <MdEvent className="h-10 w-10" />
            <TbBell className="h-10 w-10" />
            <Image
              src={"/logo.png"}
              alt="logo"
              height={40}
              width={40}
              className="rounded-full border-2 border-black"
            />
          </div>
          <div className="flex items-center">
            <h1 className="font-bold text-2xl">Events</h1>
            <MdEvent className="h-10 w-10" />
          </div>
          <hr className="border-black" />
          {/* ***********************Header End*********************** */}
          {rows.map((event) => (
            <Events
              key={event.eventid}
              event={{
                name: event.name,
                description: event.description,
                poster: event.poster,
                eventId: event.eventid,
                venue: event.venue,
                dateTime: event.date_time,
                registrationUrl: event.registration_url,
                qrCode: event.qr_code,
              }}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
