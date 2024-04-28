
import CustomCard, { CardProps } from "@/components/common/myRemainder/fetchdata";
import { sql } from "@vercel/postgres";

export default async function MyRemainders() {
    // Fetch data from the database
    const { rows } = await sql`SELECT * FROM events;`;
    
    // Log the fetched rows for debugging
    console.log(rows);

    return (
    <div className="bg-[#B3DCE9] h-wrap w-48 pb-3 rounded-lg shadow-lg">
    <div className="bg-[#60b2cb] p-2 px-3  flex justify-between items-center rounded-lg gap-2">
        <p className="text-[#0F1035] font-semibold">My Remainders</p>
        <button className="font-semibold text-2xl rounded-full hover:bg-[#438498] px-2">+</button>
    </div>
    
    {/* Render events */}
    <div className="grid gap-2 p-1 text-sm  text-[#dacece]">
        {/* {rows.map((event) => ( */}
        {rows.map((event) => {
          console.log(event);
          return (
            <div className="p-1 bg-[#365486] px-4 rounded-md" key={event.eventid}>
                <h4 className="text-white">{event.name}</h4>
                <small className="text-xs">{event.date_time}</small>
            </div>
            
                 );
        })}   
    </div>
    </div>
    );
}