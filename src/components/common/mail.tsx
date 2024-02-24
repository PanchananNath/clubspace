import Link from "next/link";

export default function Mail() {
    return(<div className="bg-blue-50 text-black">
        <h1 className="text-bold">Redirect to Mail in device!</h1>
        <h2>This is just a temporary interface which will actually be the mail in the users inbox.</h2>
        <Link href="./createpassword"><button className="bg-[#365486] rounded-lg text-white py-2 px-4 hover:scale-105 duration-300">Create new Password</button></Link>
    </div>   
    )
}