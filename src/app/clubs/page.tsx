import CustomCard, { CardProps } from "@/components/clubcard";
import { sql } from "@vercel/postgres";

export default async function Clubs() {
  const { rows } = await sql`SELECT name FROM clubs;`;

  console.log(rows);

  return (
    <main className="flex min-h-screen w-full items-center justify-center p-1">
      <div className="bg-secondary min-h-full w-full rounded-2xl p-20">
        <div className="bg-slate-100  py-20 px-44">
          <div>Clubs</div>

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
