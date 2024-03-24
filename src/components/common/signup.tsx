"use client";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { auth } from "@/app/firebase";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const router = useRouter();

  const signup = async () => {
    try{
      const user = await createUserWithEmailAndPassword(auth, email, password);
      console.log(user);
      //window.alert("user creation successfull");
      router.push("/myaccount");
    } catch(e) {
      console.log(e);
      //window.alert("user creation failed");
    }
    
  };

  return (
    <div className="bg-gray-50 px-10 py-3 w-96">
      <h2 className="font-bold text-2xl text-[#365486]">Sign up</h2>
      <p className="text-xs text-black">Please enter your details</p>

      <form action="" className="flex flex-col gap-4">
        <input
          name="email"
          type="email"
          autoComplete="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
          className="p-2 mt-4 text-sm text-black rounded-lg border w-full"
        />
        <input
          name="password"
          type="password"
          autoComplete="current-password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
          className="p-2  text-sm text-black rounded-lg border"
        />
        <input
          name="passwordAgain"
          type="password"
          autoComplete="current-password"
          placeholder="Confirm Password"
          onChange={(e) => setPasswordAgain(e.target.value)}
          required
          className="p-2 text-sm text-black rounded-lg border w-full"
        />

        <button
          disabled={
            !email || !password || !passwordAgain || password !== passwordAgain
          }
          onClick={() => signup()}
          className="bg-[#365486] rounded-lg text-white py-2 hover:scale-105 duration-300"
        >
          Signup
        </button>
      </form>
      <div className="text-xs text-black flex justify-center mt-1">
        <p>
          Have an account?{' '}
          <button
          onClick={() => router.push("./signin")}
          className="text-blue-700 hover:cursor-pointer"
        >
          Signin
        </button>
        </p>
      </div>
    </div>
  );
}
