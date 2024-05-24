import Signin from "@/components/common/signin";
import Image from "next/image";
import Logo from "../../../../public/logo.png";

export default function SigninPAGE() {
  return (
    <main className="bg-white flex items-center justify-center h-screen">
      <div className="bg-gray-50 flex gap-2 rounded-2xl shadow-lg max-w-3xl w-auto  p-5 items-center">
        {/* <div className="w-1/2"><Signin /></div> */}
        <div className="w-1/2 bg-gray-50">
          <Image src={Logo} alt="LogoImage" />
        </div>
      </div>
    </main>
  );
}
