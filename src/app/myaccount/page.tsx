import Account from "@/components/myAccount/myAccount";
import MyClubs from "@/components/myAccount/myAccount";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <div className="text-red-500 text-3xl">Club Space</div>
     <Account/>
    </main>
  );
}