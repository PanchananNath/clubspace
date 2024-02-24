import Link from "next/link";

export default function Checkmail() {
    return (
        <div className="bg-white px-16 py-3 w-96">
                <h2 className="font-bold text-2xl text-[#365486]">Check your mail</h2>
                <p className="text-xs  mb-3 text-black">
                we have sent a password recover instructions to your mail.
                </p>
                <form action="" className="flex flex-col gap-4">
                   <button className="bg-[#365486] test-sm rounded-lg text-white py-2 hover:scale-105 duration-300 flex justify-center"><Link href="./mail" >Check Mail</Link></button>
                    
                </form>
            </div>   
    )
}
