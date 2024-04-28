import CustomCard, { CardProps } from "@/components/allclubs/fetchdata";
import { sql } from "@vercel/postgres";
import { MdEvent } from "react-icons/md";
import { TbBell } from "react-icons/tb";
import Image from "next/image";

export default async function Clubs() {
  const { rows } = await sql`SELECT * FROM clubs;`;

  console.log(rows);

  return (
    //   <body className="m-0 p-0 box-border">
    <div className="container1 bg-blue-950 w-auto h-screen grid grid-cols-6">
      <div className="sidebar col-span-1"></div>
      <div className="main pt-5 px-5 w-auto h-dvh bg-white text-blue-900 rounded-lg font-san col-span-5 grid ">
        <div id="header" className="col-span-full h-10 pt-2 pr-5">
          {/* <p className="inline-block text-2xl">Welcome back, User!</p> */}
          {/* ***********************Header*********************** */}
          <div className="flex justify-end items-center gap-3">
            <MdEvent className="h-10 w-10 cursor-pointer" />
            <TbBell className="h-10 w-10 cursor-pointer" />
            <img
              src={
                "https://media.licdn.com/dms/image/D4D0BAQH75h8HyOspjg/company-logo_200_200/0/1686467713588?e=1717632000&v=beta&t=ljCofR7YmREpH8QTbJtlySQfcJv-zWzslIg2abB0PmM"
              }
              alt="logo"
              height={40}
              width={40}
              className="rounded-full border-2 border-black cursor-pointer"
            />
          </div>
          <hr className="m-3 border-black" />
          {/* ***********************Header End*********************** */}
          <h1 className="m-4 font-bold text-3xl">All Clubs</h1>
        </div>

        {/* <div className="container2  mt-5"> */}

        <div id="content" className="grid grid-cols-2 gap-4 mx-5 mb-5">
          {rows.map((item) => {
            console.log(item);
            return (
              <div
                className="box1 bg-sky-200 rounded-lg p-4 row-span-4 col-span-1"
                key={item.id}
              >
                <div id="header" className="inline-flex gap-5">
                  <img
                    className="w-20 h-20 rounded-md cursor-pointer"
                    src={item.poster}
                    alt="logo"
                  />
                  <h2 className="mt-6 font-bold text-gray-700 cursor-pointer">
                    {item.name}
                  </h2>
                </div>

                <div id="text" className="p-2 row-span-3 content-center">
                  {/* <p>{item.about}</p> */}
                  <p>{item.vision}</p>
                  {/* <p>{item.objective}</p> */}
                </div>

                <div id="buttons" className="h-14 row-span-1 pt-3">
                  <a href="">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-3">
                      View
                    </button>
                  </a>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Join
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
    // </div>
    // </body>
  );
}
