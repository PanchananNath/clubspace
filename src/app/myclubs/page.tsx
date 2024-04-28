import CustomCard, { CardProps } from "@/components/allclubs/fetchdata";
import { sql } from "@vercel/postgres";
import { MdEvent } from "react-icons/md";
import { TbBell } from "react-icons/tb";
import Image from "next/image";


export default async function Clubs() {
  const { rows } = await sql`SELECT * FROM clubs;`


  console.log(rows);

  return (
    
          <div className="container w-auto min-h-screen grid grid-cols-6">
              <div className="sidebar bg-blue-950 col-span-1"></div>
              <div className="main p-5 w-auto h-auto bg-white text-blue-900 rounded-lg font-san col-span-5">
      {/* ***********************Header*********************** */}


          <div className="flex justify-end items-center gap-3">
            <p className="text-2xl float-left">Welcome back, User!</p>
            <MdEvent className="h-10 w-10 cursor-pointer" />
            <TbBell className="h-10 w-10 cursor-pointer" />
            <img
              src={"https://media.licdn.com/dms/image/D4D0BAQH75h8HyOspjg/company-logo_200_200/0/1686467713588?e=1717632000&v=beta&t=ljCofR7YmREpH8QTbJtlySQfcJv-zWzslIg2abB0PmM"}
              alt="logo"
              height={40}
              width={40}
              className="rounded-full border-2 border-black cursor-pointer"
            />
          </div>
          <hr className="m-3 border-black" />
          {/* ***********************Header End*********************** */}
                    
        <div className="content grid grid-cols-3">
        <div className="myclubs ml-5 col-span-1">
        <h2 className="text-4xl my-10">My Clubs</h2>


      {rows.map((item) => {
          console.log(item);
          return (

                <a href="#" target="_blank" className="no-underline">
                    <div id="club" className="w-80 h-24 bg-cyan-300 mb-6 rounded-lg text-black flex items-center">
                        <img src={item.poster} alt="logo" className="w-20 h-20 rounded-lg relative right-3 ml-6"/>
                        <p className="text-xl no-underline text-black">{item.name}</p> 
                    </div>
                </a>
                        
                        
                        );
                    })}
                        <div id="explore" className="w-48 h-7 bg-blue-900 rounded-md text-white relative left-16 flex justify-center items-center cursor-pointer">
                            <small>Explore Clubs</small>
                        </div>
                </div>
                </div>
                </div>
                </div>
                        
  );
}