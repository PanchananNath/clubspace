import CustomCard, { CardProps } from "@/components/common/myRemainder/fetchdata";
import { sql } from "@vercel/postgres";

export default async function MyRemainders() {
  const { rows } = await sql`SELECT * FROM events;`


  console.log(rows);

  return (
    <div id="remainder" className="w-80 h-100 border border-black bg-grey-100 absolute left-96 top-32 cursor-pointer">
      <header className="pl-4 mt-4">
        <h2 className="text-xl font-semibold text-blue-500">My Remainders</h2>
      </header>
      <main className="pl-4 mt-4">
        {rows.map((item) => {
          console.log(item);
          return (
            <div className="info h-16 w-72 bg-blue-200 text-gray-700 rounded-lg mb-2 flex flex-col justify-center" key={item.id}>
              <h4 className="text-lg font-semibold ml-2">{item.name}</h4>
              {/* <small className="text-sm ml-2">{item.date_time}</small> */}
            </div>
          );
        })}
      </main>
    </div>
  );
}