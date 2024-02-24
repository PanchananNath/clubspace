import Link from "next/link";

export default function Register() {
    return (
        <div className="bg-white px-16 py-3 w-96">
                <h2 className="font-bold text-2xl text-[#365486]">Create Account</h2>
                <p className="text-xs text-black">Please enter your details</p>
                <form action="" className="flex flex-col gap-4">
                    <input className="p-2 mt-4 text-sm rounded-lg border w-full" type="name" name="name" placeholder="Name"/>
                    <input className="p-2  text-sm rounded-lg border" type="text" name="email" placeholder="Email"/>
                    <input className="p-2 text-sm rounded-lg border w-full" type="password" name="password" placeholder="Password"/>
                    
                    <button className="bg-[#365486] rounded-lg text-white py-2 hover:scale-105 duration-300">Register</button>
                </form>
                <div className="text-xs text-black flex justify-center mt-1">
                    <Link href="./login" className="text-blue-700 hover:cursor-pointer">Login</Link>
                </div>
            </div>   
    )
}