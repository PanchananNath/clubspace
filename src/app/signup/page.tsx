import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex justify-center bg-gradient-to-l from-green-500 to-green-100">
      <form
        action=""
        className="bg-green-300 h-fit w-1/4 self-center p-4 rounded-3xl drop-shadow-2xl"
      >
        <h1 className="font-bold text-5xl text-center m-6">Sign Up</h1>
        <div className="flex flex-col">
          <span>First Name</span>
          <input type="text" placeholder="Enter First Name" required />
          <span>Middle Name</span>
          <input type="text" placeholder="Enter First Name" />
          <span>Last Name</span>
          <input type="text" placeholder="Enter First Name" required />
          <span>Email</span>
          <input type="text" placeholder="@cit.ac.in" required />
          <span>Password</span>
          <input type="password" placeholder="Enter Password" required />
          <span>Confirm Password</span>
          <input type="password" placeholder="Confirm Password" required />
        </div>
        <div className="flex justify-center mt-7 mb-3">
          <button className="bg-green-700 text-white font-bold p-2 w-1/2 rounded-3xl">
            Sign Up
          </button>
        </div>
        <div>
          <span className="font-light text-md mr-2">Already Registered?</span>
          <Link
            href="\login"
            className="text-blue-700 font-bold text-lg hover:text-red-700"
          >
            Login
          </Link>
        </div>
      </form>
    </div>
  );
}
