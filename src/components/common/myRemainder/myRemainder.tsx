
import CustomCard, { CardProps } from "@/components/common/myRemainder/fetchdata";
import { sql } from "@vercel/postgres";

export default async function MyRemainders() {
  const { rows } = await sql`SELECT * FROM events;`


  console.log(rows);

  return (
    <div id="remainder" className="w-80 h-100 shadow-2xl shadow-neutral-400  bg-sky-100 absolute left-98 top-32 cursor-pointer text-sm ml-2">
      {/* <small className="text-sm ml-2"></small> *modify upeer class*/}
      <header className="pl-4 mt-4">
        <h2 className="text-xl font-semibold text-blue-500">My Remainders</h2>
      </header>
      <main className="pl-4 mt-4">
    
        {rows.map((event) => {
          console.log(event);
          console.log(datetime);
          return (
            <div className="info h-16 w-72 shadow-1xl bg-[#7FC7D9] text-gray-700 rounded-2xl mb-2 flex flex-col justify-center" key={event.id}>
              <h4 className="text-lg font-semibold ml-2">{event.name}</h4>
              <small className="text-sm ml-2">{event.newDate}</small>
            </div>
          );
        })}
      </main>
    </div>
  );
}

  
