import Link from "next/link";

export default function Createpassword() {
    return (
        <div className="bg-white px-16 py-3 w-96">
                <h2 className="font-bold text-2xl text-[#365486]">Create new Password</h2>
                <p className="text-xs  mb-3 text-black">Your new password must be strong</p>
                <form action="" className="flex flex-col gap-4">
                    <input className="p-2 text-sm rounded-lg border w-full" type="password" name="password" placeholder="Enter new Password"/>
                    <input className="p-2 text-sm rounded-lg border w-full" type="password" name="password" placeholder="Confirm new Password"/>
                    <button className="bg-[#365486] test-sm rounded-lg text-white py-2 hover:scale-105 duration-300 flex justify-center"><Link href="./login" >Reset Password</Link></button>
                </form>
            </div>   
    )
}
