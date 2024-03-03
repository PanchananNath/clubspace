import Link from "next/link";

export default function Checkmail() {
    return (
        <div className="bg-white px-16 py-3 w-96">
                <h2 className="font-bold text-2xl text-[#365486]">Go Back</h2>
                <form action="" className="flex flex-col gap-4">
                  
                <button className="bg-[#365486] test-sm rounded-lg text-white py-2 hover:scale-105 duration-300 flex justify-center"><Link href="./mail" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-bar-left" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5M10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5"/>
                </svg> Check Mail</Link></button>
                    
                </form>
            </div>   
    )
}