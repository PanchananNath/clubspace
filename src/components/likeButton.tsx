"use client";
import { useState } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { BiDislike } from "react-icons/bi";

export default function LikeButton() {
  let [like, setLike] = useState(0);
  return (
    <>
      <button className="" onClick={() => setLike(like++)}>
        <AiOutlineLike className="text-white text-xl" />
      </button>
      <span className="text-sm text-white">{like}</span>
      <span className="text-white">|</span>
      <button onClick={() => setLike(like--)}>
        <BiDislike className="text-white text-xl" />
      </button>
    </>
  );
}
