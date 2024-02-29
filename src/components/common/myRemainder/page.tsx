import CustomCard, { CardProps } from "@/components/clubcard";
import { sql } from "@vercel/postgres";

export default async function Events() {
  const { rows } = await sql`SELECT name FROM events;`;

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
                  name={item.name}
                  date_time={item.date_time}
                  eventid={""}
                />
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}