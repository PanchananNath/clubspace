import { sql } from "@vercel/postgres";

export default async function Test(props: { params: { id: string } }) {
  console.log(props.params.id);
  // const { rows } =
  //   await sql`SELECT name FROM clubs WHERE clubid=${props.params.id};`;
  return (
    <div className="w-screen text-black flex justify-center items-center bg-blue-500">
      <div className="text-4xl font-bold">{props.params.id}</div>
    </div>
  );
}
