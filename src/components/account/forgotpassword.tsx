"use client";
import { useState } from "react";
import { Auth, sendPasswordResetEmail } from "firebase/auth";
import { auth } from "@/app/firebase";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  const resetEmail = (auth: Auth, email: string) => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        console.log("Password Reset Email Sent");
      })
      .catch((error) => {
        console.log("Error sending Password Reset Email: ", error.message);
      });
  };

  return (
    <>
      <div className="bg-white px-5 py-5 w-96 rounded-md shadow-md shadow-black">
        <h2 className="font-bold text-2xl text-[#365486]">
          Reset your Password
        </h2>
        <p className="text-xs  mb-3 text-black">
          Enter the email associated with your account and we’ll send an email
          with instructions to reset your password.
        </p>
        <form action="" className="flex flex-col gap-4">
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            autoComplete="email"
            onChange={(e) => setEmail(e.target.value)}
            required
            className="p-2 text-sm rounded-lg border-2 focus:outline-none focus:border-primary"
          />
          <button
            onClick={() => resetEmail(auth, email)}
            disabled={!email}
            className="bg-[#365486] test-sm rounded-lg text-white py-2 hover:scale-105 duration-300 flex justify-center"
          >
            Send
          </button>
        </form>
      </div>
    </>
  );
}
