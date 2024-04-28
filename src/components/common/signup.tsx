'use client';
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { auth } from "@/app/firebase";


export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const router = useRouter();

  const signup = async (e: { preventDefault: () => void; }) => {
    e.preventDefault(); // Prevent default form submission
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      router.push("/dashboard");
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if(user) {
        console.log('signed in', user);
        window.alert('user created succesfully');
      }
    });
    return () => unsubscribe();
  },[]);
  
  return (
    <div className="bg-gray-50 px-10 py-3 w-96">
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
          className="p-2 mt-4 text-sm text-black rounded-lg border w-full"
        />
        <input
          name="password"
          type="password"
          autoComplete="new-password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="p-2 text-sm text-black rounded-lg border"
        />
        <input
          name="passwordAgain"
          type="password"
          autoComplete="new-password"
          placeholder="Confirm Password"
          value={passwordAgain}
          onChange={(e) => setPasswordAgain(e.target.value)}
          required
          className="p-2 text-sm text-black rounded-lg border w-full"
        />

        <button
          type="submit"
          disabled={!email || !password || !passwordAgain || password !== passwordAgain}
          className="bg-[#4467a3] rounded-lg text-white py-2 hover:scale-105 duration-300  hover:bg-[#365486]"
        >
          Signup
        </button>
      </form>
      <div className="text-xs text-black flex justify-center mt-1">
        <p>
          Have an account?{' '}
          <button
            onClick={() => router.push("/signin")}
            className="text-blue-700 hover:cursor-pointer"
          >
            Signin
          </button>
        </p>
      </div>
    </div>
  );
}
