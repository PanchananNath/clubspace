
import CustomCard, { CardProps } from "@/components/common/myRemainder/fetchdata";
import { sql } from "@vercel/postgres";

export default async function MyRemainders() {
  const { rows } = await sql`SELECT * FROM events;`


  console.log(rows);

  return (
    <div id="remainder" className="w-80 h-100 border border-black bg-white absolute left-98 top-32 cursor-pointer text-sm ml-2">
      {/* <small className="text-sm ml-2"></small> *modify upeer class*/}
      <header className="pl-4 mt-4">
        <h2 className="text-xl font-semibold text-blue-500">My Remainders</h2>
      </header>
      <main className="pl-4 mt-4">
    
        {rows.map((event) => {
          console.log(event);
          return (
            <div className="info h-16 w-72 bg-blue-200 text-gray-700 rounded-lg mb-2 flex flex-col justify-center" key={event.eventid}>
              <h4 className="text-lg font-semibold ml-2">{event.name}</h4>
              <small className="text-sm ml-2">{event.date_time}</small>
              </div>
              );
            })}
      </main>
    </div>
  );
}

  
