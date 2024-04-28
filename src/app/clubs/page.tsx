import CustomCard, { CardProps } from "@/components/clubcard";
import { sql } from "@vercel/postgres";

export default async function Clubs() {
  const { rows } = await sql`SELECT name, about FROM clubs;`;

  console.log(rows);

  return (
    <main className="flex bg-secondary  h-screen w-full items-center justify-center p-5">
      <div className="h-full w-full rounded-2xl overflow-y-scroll">
        <div className=" py- px-">
          <div className="text-3xl font-bold w-full text-center my-5 ">Clubs</div>
          <div className="grid grid-cols-3 gap-5">

          {rows.map((item) => {
            console.log(item);
            return (
              <div className=" " key={item.id}>
                <CustomCard
                  title={item.name}
                  description={item.about}
                  icon={""}
                />
              </div>
            );
          })}
          </div>
        </div>
      </div>
    </main>
  );
}
