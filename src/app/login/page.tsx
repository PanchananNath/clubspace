import Image from "next/image";
import { LuLogIn } from "react-icons/lu";
import { FcGoogle } from "react-icons/fc";

export default function Test() {
  return (
   
    <div className="min-h-screen flex justify-center content-center bg-gradient-to-r from-green-600 to-green-100">
        <form action="" className="w-96 h-fit bg-green-300 rounded-3xl self-center shadow-2xl">

            <h1 className="text-center text-5xl p-5 font-bold text-green-800">Login</h1>

            <div className="flex flex-col px-5">
                <input type="text" name="" id="" placeholder="Username" required className="rounded-full p-1 "/>
                <input type="password" placeholder="Password" required className="rounded-full p-1 mt-3" />
            </div>

            <div className="flex justify-center mt-3">
                <button className="font-bold text-white bg-green-800 w-3/5 p-1 rounded-full flex justify-center hover:bg-white hover:text-black hover:font-bold"><LuLogIn className="h-6 w-6 mr-5"/>Login</button>
            </div>

            <div className="flex justify-between m-5">
                <div>
                    <input type="checkbox" name="" id=""/>
                    <label htmlFor="" className="font-light ml-2">Remember Me</label>
                </div>
                <a href="" className="text-blue-600 hover:text-red-600">Forgot Password?</a>
            </div>

            <div className="flex flex-col">
                <h3 className="font-light text-m ml-5">Sign in with</h3>
                <a href="" className="place-self-center"><FcGoogle className="h-10 w-10 mb-3"/></a>
            </div>

            <div className="flex justify-center mb-3">
                <span className="mr-2">New User?</span>
                <a href="" className="font-bold text-blue-600 hover:text-red-600">Create Account</a>
            </div>

        </form>
    </div>

  );
}