import MyClubs from "@/components/myClubs/myClubs";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     {/* <div className="text-red-500 text-3xl">Club Space</div> */}
     <MyClubs/>
    </main>
  );
}