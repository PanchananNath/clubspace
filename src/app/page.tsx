import conn from "./lib/db";
export default function Home() {
  getPosts();
  return (
    <main className="flex min-h-screen w-full items-center justify-center p-1">
      <div className="bg-secondary h-full w-full rounded-2xl flex justify-center">
        <div className="self-center text-2xl font-bold">Dashboard</div>
      </div>
    </main>
  );
}

async function getPosts() {
  try {
    const result = await conn.query("SELECT * FROM clubs;");
    return result.rows;
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
}
