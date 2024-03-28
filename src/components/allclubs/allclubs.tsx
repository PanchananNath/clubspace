// import Image from "next/image";
import CustomCard, { CardProps } from "@/components/allclubs/fetchdata";
import { sql } from "@vercel/postgres";

export default async function AllClubs() {
  const { rows } = await sql`SELECT name, about FROM clubs;`;

  console.log(rows);
// export default function AllClubs() {
    return(
        <body className="m-0 p-0 box-border">
            <div className="container1 bg-blue-950 w-auto h-screen grid grid-cols-6">
                <div className="sidebar col-span-1"></div>
                <div className="main p-5 w-auto bg-[url('')] bg-white text-blue-900 rounded-lg font-san col-span-5 grid ">
                    
                    <div id="header" className="col-span-full h-10">
                        <p className="inline-block text-2xl">Welcome back, User!</p>
                    </div>
            
                    <div className="container2 w-auto">
            
                        <div id="header">
                            <h1 className="mb-7 font-bold text-3xl">All Clubs</h1>
                        </div>
            
                        <div id="content" className="w-auto h-auto grid grid-cols-2 grid-rows-2 gap-4">
                            <div className="box1 h-auto bg-sky-200 rounded-lg p-4">
                                    <div id="header" className="flex gap-5 h-20 mb-5">
                                        <img className="w-20 h-20 rounded-md cursor-pointer" src="https://media.licdn.com/dms/image/D4D0BAQG2bvQZMpjKYg/company-logo_200_200/0/1694538299913?e=2147483647&v=beta&t=fi17Jf6UUNfZ71eKp423YRBslxeq25h66MCiYQ7O5CI" alt="logo" />
                                        <h2 className="mt-6 font-bold text-xl text-gray-700 cursor-pointer">Cyber Security Club</h2>
                                    </div>
                
                                    <div id="text" className="h-auto">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa asperiores quia dicta qui quam temporibus, alias odio voluptate quaerat. Ad deserunt at cum maxime, magnam perferendis neque molestiae eum debitis? so thia is the best phone I have ever seen.What you think about it?</p>
                                    </div>
                                    
                                    <div id="buttons" className="h-14 mt-5">
                                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2 rounded">
                                            View
                                        </button>
                                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                            Join
                                        </button>
                                    </div>
                            </div>
                            <div className="box1 h-auto bg-sky-200 rounded-lg p-4">
                                    <div id="header" className="flex gap-5 h-20 mb-5">
                                        <img className="w-20 h-20 rounded-md cursor-pointer" src="https://media.licdn.com/dms/image/D5603AQFlFq9BFDVOFQ/profile-displayphoto-shrink_200_200/0/1693930664921?e=2147483647&v=beta&t=EVGhxHvTzgLDZIfikFhvTJso1QY_s1NSKexivqFT-Vw" alt="logo" />
                                        <h2 className="mt-6 font-bold text-xl text-gray-700 cursor-pointer">AI Club</h2>
                                    </div>
                
                                    <div id="text" className="h-auto">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa asperiores quia dicta qui quam temporibus, alias odio voluptate quaerat. Ad deserunt at cum maxime, magnam perferendis neque molestiae eum debitis? so thia is the best phone I have ever seen.What you think about it?</p>
                                    </div>
                                    
                                    <div id="buttons" className="h-14 mt-5">
                                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2 rounded">
                                            View
                                        </button>
                                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                            Join
                                        </button>
                                    </div>
                            </div>
                            <div className="box1 h-auto bg-sky-200 rounded-lg p-4">
                                    <div id="header" className="flex gap-5 h-20 mb-5">
                                        <img className="w-20 h-20 rounded-md cursor-pointer" src="https://media.licdn.com/dms/image/C560BAQEcHD6UhiBLmw/company-logo_200_200/0/1648636313082?e=2147483647&v=beta&t=kRpSSF8WI3nB7E0ZmAoPAHsw0hbyB12lj847jjpEluc" alt="logo" />
                                        <h2 className="mt-6 font-bold text-xl text-gray-700 cursor-pointer">Development Club</h2>
                                    </div>
                
                                    <div id="text" className="h-auto">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa asperiores quia dicta qui quam temporibus, alias odio voluptate quaerat. Ad deserunt at cum maxime, magnam perferendis neque molestiae eum debitis? so thia is the best phone I have ever seen.What you think about it?</p>
                                    </div>
                                    
                                    <div id="buttons" className="h-14 mt-5">
                                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2 rounded">
                                            View
                                        </button>
                                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                            Join
                                        </button>
                                    </div>
                            </div>
                            <div className="box1 h-auto bg-sky-200 rounded-lg p-4">
                                    <div id="header" className="flex gap-5 h-20 mb-5">
                                        <img className="w-20 h-20 rounded-md cursor-pointer" src="https://media.licdn.com/dms/image/D4D0BAQH75h8HyOspjg/company-logo_200_200/0/1686467713588?e=1717632000&v=beta&t=ljCofR7YmREpH8QTbJtlySQfcJv-zWzslIg2abB0PmM" alt="logo" />
                                        <h2 className="mt-6 font-bold text-xl text-gray-700 cursor-pointer">Robotics Club</h2>
                                    </div>
                
                                    <div id="text" className="h-auto">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa asperiores quia dicta qui quam temporibus, alias odio voluptate quaerat. Ad deserunt at cum maxime, magnam perferendis neque molestiae eum debitis? so thia is the best phone I have ever seen.What you think about it?</p>
                                    </div>
                                    
                                    <div id="buttons" className="h-14 mt-5">
                                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2 rounded">
                                            View
                                        </button>
                                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                            Join
                                        </button>
                                    </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </body>
    );
}