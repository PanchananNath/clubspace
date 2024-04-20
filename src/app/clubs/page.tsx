import CustomCard, { CardProps } from "@/components/clubcard";
import { sql } from "@vercel/postgres";

export default async function Clubs() {
  const { rows } = await sql`SELECT name, about FROM clubs;`;

  console.log(rows);

  return (
    <main className="flex h-screen w-full items-center justify-center p-1">
      <div className="bg-secondary h-full w-full rounded-2xl overflow-y-scroll">
        <div className="bg-slate-100  py- px-">
          <div className="overflow-y-scroll">Clubs</div>

          {rows.map((item) => {
            console.log(item);
            return (
              <div className="w-64" key={item.id}>
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
    </main>
  );
}
