import SignUp from "@/components/common/signup";
import Logo from "../../../../public/logo.png";
import Image from "next/image";

export default function SignupPage() {
  return (
    <main className="bg-white flex items-center justify-center h-screen">
      <div className="bg-gray-50 flex gap-2 rounded-2xl shadow-lg max-w-3xl w-auto  p-5 items-center">
        <div className="w-1/2">{/* <SignUp /> */}</div>
        <div className="w-1/2 bg-gray-50">
          {/* <Image src={Logo} alt="LogoImage" /> */}
        </div>
      </div>
    </main>
  );
}
