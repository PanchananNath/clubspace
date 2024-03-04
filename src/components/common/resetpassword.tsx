import Link from "next/link";

export default function ResetPass() {
    return (
        <div className="bg-white px-16 py-3 w-96">
                <h2 className="font-bold text-2xl text-[#365486]">Reset your Password</h2>
                <p className="text-xs  mb-3 text-black">
                    Enter the email associated with your account
                    and we’ll send an email with instructions to reset your password.
                </p>
                <form action="" className="flex flex-col gap-4">
                    <input className="p-2 text-sm rounded-lg border w-full" type="text" name="email" placeholder="Enter your email"/>
                    <button className="bg-[#365486] test-sm rounded-lg text-white py-2 hover:scale-105 duration-300 flex justify-center"> <Link href="./login" >Send</Link></button>
                    
                </form>
            </div>   
    )
}
