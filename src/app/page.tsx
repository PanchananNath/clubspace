import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <div className="text-red-500 text-3xl">Club Space</div>
     <Link href="/login" className="font-bold text-5xl text-blue-500">Login</Link>
    </main>
  );
}
