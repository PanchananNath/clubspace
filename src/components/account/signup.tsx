"use client";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { auth } from "@/app/firebase";
import { IoMdCloseCircleOutline } from "react-icons/io";
import Image from "next/image";
import Spinner from "./spinner";

export interface SigninProps {
  setSignup: (value: boolean) => void;
  setSignin: (value: boolean) => void;
}

export default function Signup({ setSignup, setSignin }: SigninProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const signup = async (e: { preventDefault: () => void }) => {
    e.preventDefault(); // Prevent default form submission
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      router.push("/dashboard");
    } catch (error) {
      console.error("Error registering user:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("signed in", user);
        window.alert("user created succesfully");
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute z-50 h-full w-full flex justify-center items-center">
      <div className=" relative sm:bg-white w- sm:w-2/3 rounded-lg p-2 shadow-md shadow-blue-400 flex">
        <button
          onClick={() => setSignup(false)}
          className="absolute sm:right-1 sm:top-1 right-5 top-5"
        >
          <IoMdCloseCircleOutline className="text-3xl text-blue-500" />
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
          <div className="bg-slate-200 px-10 py-3 sm:w-[rem] w-96 rounded-lg">
            <h2 className="font-bold text-2xl text-[#365486]">Sign up</h2>
            <p className="text-xs text-black">Please enter your details</p>

            <form className="flex flex-col gap-4" onSubmit={signup}>
              <input
                name="email"
                type="email"
                autoComplete="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="p-2 mt-4 text-sm text-black rounded-lg border-2 focus:outline-none focus:border-primary"
              />
              <input
                name="password"
                type="password"
                autoComplete="new-password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="p-2 text-sm text-black rounded-lg border-2 focus:outline-none focus:border-primary"
              />
              <input
                name="passwordAgain"
                type="password"
                autoComplete="new-password"
                placeholder="Confirm Password"
                value={passwordAgain}
                onChange={(e) => setPasswordAgain(e.target.value)}
                required
                className="p-2 text-sm text-black rounded-lg border-2 focus:outline-none focus:border-primary"
              />

              <button
                type="submit"
                disabled={
                  !email ||
                  !password ||
                  !passwordAgain ||
                  password !== passwordAgain
                }
                className="bg-[#4467a3] rounded-lg text-white py-2 hover:scale-105 duration-300  hover:bg-[#365486]"
              >
                {loading ? <Spinner /> : "Signup"}
              </button>
            </form>
            <div className="text-xs text-black flex justify-center mt-1">
              <p>
                Have an account?{" "}
                <button
                  onClick={() => {
                    setSignup(false);
                    setSignin(true);
                  }}
                  className="text-blue-700 hover:cursor-pointer"
                >
                  Signin
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
