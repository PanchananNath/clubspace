'use client';
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";


export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  return (
    <div className="bg-gray-50 px-10 py-3 w-96">
      <h2 className="font-bold text-2xl text-[#365486]">Signin</h2>
      <p className="text-xs text-black">Please enter your details</p>
      <form action="" className="flex flex-col gap-4">
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          autoComplete="email"
          onChange={(e) => setEmail(e.target.value)}
          required
          className="p-2 mt-4 text-sm rounded-lg border"
        />
        <div className="relative">
          <input
            type="password"
            name="password"
            placeholder="Password"
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
            required
            className="p-2 text-sm text-black rounded-lg border w-full"
          />
          <div className="flex items-center justify-between mt-1">
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
              className="text-[#365486] text-xs hover:cursor-pointer"
            >
              forgot password
            </p>
          </div>
        </div>

        <button 
            onClick={() => signIn('credentials', {email, password, redirect: true,  callbackUrl: "/"})} 
            className="bg-[#365486] rounded-lg text-white py-2 hover:scale-105 duration-300 flex justify-center">
          Signin
        </button>
      </form>

      <button className="bg-white text-black border py-2 w-full rounded-lg mt-3 flex justify-center items-center text-sm hover:scale-105 duration-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="mr-3"
          x="0px"
          y="0px"
          width="25px"
          height="25px"
          viewBox="0 0 48 48"
        >
          <path
            fill="#FFC107"
            d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
          ></path>
          <path
            fill="#FF3D00"
            d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
          ></path>
          <path
            fill="#4CAF50"
            d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
          ></path>
          <path
            fill="#1976D2"
            d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
          ></path>
        </svg>
        Signin with Google
      </button>

      <div className="text-xs text-black flex justify-center mt-1">
        <p>
          Don't have an account?{' '}
          <button
            onClick={() => router.push("/signup")}
            className="text-blue-700 hover:cursor-pointer">
            Register
          </button>
        </p>
      </div>
    </div>
  );
}
