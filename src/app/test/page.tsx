
// import CustomCard, { CardProps } from "@/components/common/myRemainder/fetchdata";
// import { sql } from "@vercel/postgres";

// export default async function Events() {
//   const { rows } = await sql`SELECT * FROM events;`;



//   console.log(rows);

//   return (
//     <main className="flex min-h-screen w-full items-center justify-center p-1">
//       <div className="bg-secondary min-h-full w-full rounded-2xl p-20">
//         <div className="bg-slate-100  py-20 px-44">
//       <small className="text-sm ml-2"></small>// for date_time 
//           <div>Events</div>
//           {rows.map((event) => {
//           console.log(event);
//           return (
//             <div className="w-64" key={event.id}>
//               <CustomCard
//                 eventid={event.eventid}
//                 name={event.name}
//                 venue={event.venue}
//                  date_time={event.date_time}

//             />
             
//             </div>
//           );
//         })}
//         </div>
//       </div>
//     </main>
//   );
// } 

import CustomCard, { CardProps } from "@/components/common/myRemainder/fetchdata"; // Check if this path is correct
import { sql } from "@vercel/postgres";

export default async function Events() {
  try {
    const { rows } = await sql`SELECT * FROM events;`;

    console.log(rows);

    return (
      <main className="flex min-h-screen w-full items-center justify-center p-1">
        <div className="bg-secondary min-h-full w-full rounded-2xl p-20">
          <div className="bg-slate-100 py-20 px-44">
            <small className="text-sm ml-2">{/* Comment for date_time */}</small>
            <div>Events</div>
            {rows.map((event) => {
              console.log(event);
              return (
                <div className="w-64" key={event.id}>
                  <CustomCard
                    eventid={event.eventid}
                    name={event.name}
                    venue={event.venue}
                    date_time={event.date}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </main>
    );
  } catch (error) {
    console.error("Error fetching events:", error);
    // Handle error, display error message, etc.
    return null; // or render a component indicating the error
  }
}
