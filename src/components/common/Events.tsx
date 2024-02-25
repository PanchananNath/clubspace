import { MdEvent } from "react-icons/md";
import { TbBell } from "react-icons/tb";
import { AiOutlineLike } from "react-icons/ai";
import { BiDislike } from "react-icons/bi";
import { BiCommentDetail } from "react-icons/bi";
export default function Events() {
  return (
    <div className="h-full w-full  border-red- flex flex-col bg-transparent rounded-2xl ">
      <div className="h-14 w-full bg-green- flex justify-end items-center gap-4 pr-7">
        <span className=" bg-blue-600 rounded-full h-8 w-8 text-center text-white">
          A
        </span>
        <span className=" bg-blue-600 rounded-full h-8 w-8 text-center text-white">
          A
        </span>
        <span className=" bg-blue-600 rounded-full h-8 w-8 text-center text-white">
          A
        </span>
      </div>
      <div className="h-14 w-full bg-green- flex gap-5 items-center pl-7">
        <h1 className="text-2xl font-bold">Events</h1>
        <span className=" bg-blue-600 rounded-full h-8 w-8 text-center text-white">
          A
        </span>
      </div>
      <hr className="border border-black ml-7 mr-7" />
      <div className="h-5/6 w-5/6 bg-ternary self-center mt-5 mb-2 rounded-lg shadow-2xl p-3">
        <div className="flex gap-3">
          <span className="bg-white">Logo</span>
          <h2 className="font-bold">Cyber X Secure Club</h2>
        </div>
        <div className="mt-5">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
            alias? Eligendi autem amet magni. Modi nulla laboriosam doloribus
            iste repudiandae illum sint et quam quaerat quasi facere expedita
            mollitia nobis tenetur provident, aliquam, rem eum inventore, sit
            accusamus porro non odit? Dolores distinctio voluptates commodi
            aliquam omnis, iure eum quaerat!
          </p>
        </div>
        <div className="h-80 w-full bg- flex justify-center items-center">
          <div className="border-2 border-black h-full w-64 text-center">
            Poster
          </div>
        </div>
        <hr className="border border-black ml-7 mr-7 mt-5" />
        <div className="h-14 w-full bg-red-  flex justify-around   items-center pl-3 pr-3 mt-3">
          <button className="bg-primary h-9 w-28 rounded-lg text-white">
            A
          </button>
          <button className="bg-primary h-9 w-28 rounded-lg text-white">
            A
          </button>
          <button className="bg-primary h-9 w-28 rounded-lg text-white">
            A
          </button>
        </div>
      </div>
    </div>
  );
}
