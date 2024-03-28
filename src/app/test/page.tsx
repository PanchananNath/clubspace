import CustomCard, { CardProps } from "@/components/allclubs/fetchdata";
import { sql } from "@vercel/postgres";

export default async function Clubs() {
  // const { rows } = await sql`SELECT * FROM events;`;
  const { rows } = await sql`SELECT * FROM allclubs;`;



  console.log(rows);

  return (
    <main className="flex min-h-screen w-full items-center justify-center p-1">
      <div className="bg-secondary min-h-full w-full rounded-2xl p-20">
        <div className="bg-slate-100  py-20 px-44">
          <div>allclubs</div>
          {rows.map((item) => {
          console.log(item);
          return (
            <div className="w-64" key={item.id}>//item.id for old events
              <CustomCard
                name={item.name}
                description={item.description}
                viewLink={item.viewLiew}
                joinLink={item.joinLink}
                convener={item.convener}
            />
             
            </div>
          );
        })}
        </div>
      </div>
    </main>
  );
}