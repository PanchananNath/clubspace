import AllClubs from "@/components/allclubs/allclubs";
import Image from "next/image";
import { sql } from "@vercel/postgres";

export default async function Home() {
  const { rows } = await sql`SELECT name, about FROM allclubs;`;

  console.log(rows);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <AllClubs/>
    </main>
  );
}