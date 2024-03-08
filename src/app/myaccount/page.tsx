import CustomCard, { CardProps } from "@/components/accountcard";
import { sql } from "@vercel/postgres";

export default async function myaccount() {
  const { rows } = await sql`SELECT username, email FROM users where id=101;`;
  // const { rows } = await sql`INSERT into  users values(001, 'ABC')`;

  console.log(rows);

  return (
    <main className="flex min-h-screen w-full items-center justify-center p-1">
      <div className="bg-secondary h-full w-full rounded-2xl flex justify-center">
        {/* <div className="self-center text-2xl font-bold">My Account</div> */}
        {rows.map((item) => {
          console.log(item);
          return (
            <div className="w-64" key={item.id}>
              <CustomCard
                username={item.username}
                email={item.email}
                icon={""}
              />
            </div>
          );
        })}
      </div>
    </main>
  );
}
