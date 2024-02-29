import CustomCard, { CardProps } from "@/components/common/myRemainder/fetchdata";
import { sql } from "@vercel/postgres";

export default async function Events() {
  const { rows } = await sql`SELECT * FROM events;`;

  console.log(rows);

  return (
    <main className="flex min-h-screen w-full items-center justify-center p-1">
      <div className="bg-secondary min-h-full w-full rounded-2xl p-20">
        <div className="bg-slate-100  py-20 px-44">
          <div>Events</div>
          {rows.map((item) => {
          console.log(item);
          return (
            <div className="w-64" key={item.id}>
              <CustomCard
                eventid={item.eventid}
                name={item.name}
                venue={item.venue}
                // date_time={item.date_time}
              />
            </div>
          );
        })}
        </div>
      </div>
    </main>
  );
}