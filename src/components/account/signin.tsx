"use client";
import { auth } from "@/app/firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import Image from "next/image";
import { user } from "@nextui-org/react";
import { FcGoogle } from "react-icons/fc";
import Spinner from "./spinner";
import Alert from "./alert";

export interface SigninProps {
  setSignin: (value: boolean) => void;
  setSignup: (value: boolean) => void;
}
export default function Signin({ setSignin, setSignup }: SigninProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [alertMessage, setAlertMessage] = useState<string | null>(null);
  const router = useRouter();

  const handleSignInWithEmailAndPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      router.push("/dashboard");
    } catch (error) {
      console.error("Error signing in:", error);
      setAlertMessage("Sign-in failed. Please check your email and password.");
      setLoading(false); // Only stop loading if there was an error
    }
  };

  const handleSignInWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      router.push("/dashboard");
    } catch (error) {
      console.error("Google singin error: ", error);
      setAlertMessage("Google sign-in failed. Please try again.");
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("user signed in : ", user);
        router.push("/dashboard");
      } else {
        console.log("no user signed in");
      }
    });
    return () => unsubscribe();
  }, [router]);

  return (
    <div className="absolute z-50 w-full h-full flex justify-center items-center">
      {alertMessage && (
        <Alert message={alertMessage} onClose={() => setAlertMessage(null)} />
      )}
      <div className=" relative sm:bg-white w- sm:w-2/3 rounded-lg p-2 shadow-md shadow-[#6f9ded] flex">
        <button
          onClick={() => setSignin(false)}
          className="absolute sm:right-1 sm:top-1 right-5 top-5"
        >
          <IoMdCloseCircleOutline className="text-3xl text-[#6f9ded]" />
        </button>
        <div className="w-1/2 sm:flex justify-center hidden">
          <div className="w-96">
            <Image
              src={"/clubspaceLogo.png"}
              alt="LogoImage"
              width={500}
              height={500}
            />
          </div>
        </div>
        <div className="sm:w-1/2 w-full flex justify-center items-center">
          <div className="bg-slate-200 px-10 py-3 w-96 rounded-lg">
            <h2 className="font-bold text-2xl text-[#365486]">Signin</h2>
            <p className="text-xs text-black">Please enter your details</p>
            <form className="flex flex-col gap-4">
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="p-2 mt-4 text-sm rounded-lg border-2 focus:outline-none focus:border-primary"
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="p-2 text-sm text-black rounded-lg border-2 focus:outline-none focus:border-primary"
              />

              <div className="flex items-center justify-between">
                <div className="flex items-center ">
                  <input
                    type="checkbox"
                    id="myCheckbox"
                    name="myCheckbox"
                    className="h-[15px] w-[15px] text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="myCheckbox"
                    className="ml-2 block text-xs text-gray-900"
                  >
                    Remember me
                  </label>
                </div>
                <p
                  onClick={() => router.push("./forgotpassword")}
                  className="text-blue-700 text-xs hover:cursor-pointer "
                >
                  Forgot password?
                </p>
              </div>

              <button
                type="submit"
                onClick={handleSignInWithEmailAndPassword}
                className="bg-[#4467a3] hover:bg-[#365486]  rounded-lg text-white py-2 hover:scale-105 duration-300 flex justify-center"
                disabled={loading} // Disable the button when loading
              >
                {loading ? <Spinner /> : "Signin"}
              </button>
            </form>

            <button
              onClick={handleSignInWithGoogle}
              className="bg-white text-black border py-2 w-full rounded-lg mt-3 flex justify-center items-center text-sm hover:scale-105 duration-300 gap-3"
            >
              <FcGoogle className="text-xl" />
              Signin with Google
            </button>

            <div className="text-xs text-black flex justify-center mt-1">
              <p>
                Don&apos;t have an account?{" "}
                <button
                  onClick={() => {
                    setLoading(true);
                    setSignin(false);
                    setSignup(true);
                  }}
                  className="text-blue-700 hover:cursor-pointer"
                >
                  Register
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
