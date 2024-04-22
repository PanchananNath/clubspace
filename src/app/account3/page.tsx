import Account from "@/components/common/account3";
import Image from "next/image";

export default function AccountPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="text-red-500 text-3xl"></div>
      <Account/>
    </main>
  );
}