import Account from "@/components/common/Account";
import Navbar from "@/components/common/navbar";
import logo from "../../../public/logo.png";
import Image from "next/image";

export default function myaccount() {
  return (
    <main className="flex min-h-screen w-full items-center justify-center p-1">
      <div className="bg-white relative h-screen w-full rounded-2xl ">
        <Navbar />
        <div>
          <Image
            alt="Mountains"
            src={logo}
            placeholder="blur"
            quality={100}
            fill
            sizes="100vw"
            style={{
              objectFit: "contain",
            }}
          />
          <div className="text-2xl text-black font-bold px-11 mt-20 mb-4">
            My Account
          </div>
          <div className="px-11 relative mt">
            <Account />
          </div>
        </div>
      </div>
    </main>
  );
}
