"use client";
import Signin from "@/components/common/signin";
import WhatsNew from "@/components/whatsnew";
import SignUp from "@/components/common/signup";
import Image from "next/image";
import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { MdFiberNew } from "react-icons/md";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const images = [
  {
    src: "/carousel/one.png",
    alt: "image1",
  },
  {
    src: "/carousel/two.png",
    alt: "image2",
  },
];

export default function Home() {
  const [whatsnewpopup, setWhatsNewPopup] = useState(false);
  const [signin, setSignin] = useState(false);
  const [signup, setSignup] = useState(false);
  return (
    <main className="h-screen flex justify-center items-center bg-gradient-to-r from-blue-200 via-blue-500 to-blue-800">
      {whatsnewpopup && <WhatsNew setWhatsNew={setWhatsNewPopup} />}
      {signin && <Signin setSignin={setSignin} />}
      {signup && <SignUp setSignup={setSignup} />}
      <Carousel
        showIndicators={false}
        showThumbs={false}
        showStatus={false}
        showArrows={false}
        autoPlay={true}
        interval={3000} // 3 seconds
        infiniteLoop={true}
        className="w-full h-full overflow-hidden"
      >
        {images.map((image, index) => (
          <div key={index}>
            <Image
              src={image.src}
              alt={image.alt}
              height={1000}
              width={2000}
              // layout="fill"
              // objectFit="cover"
            />
          </div>
        ))}
      </Carousel>
      <div className="absolute h-full w-full flex justify-center items-center bg-black bg-opacity-50">
        <div className=" flex flex-col">
          <div className="flex justify-center items-center cursor-pointer text-white">
            <div
              onClick={() => {
                setWhatsNewPopup(true);
                console.log("clicked");
              }}
              className="flex items-center gap-1 px-5 text-sm rounded-full my-5 text-white bg-black bg-opacity-25"
            >
              <span className="capitalize">What&apos;s </span>
              <MdFiberNew className="text-2xl animate-pulse" />
            </div>
          </div>

          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl ">
            Welcome to the Club Space
          </h1>
          <p className="self-center mb-5 text-slate-300 text-xl">
            Connect with people with your interest
          </p>
          <div className="flex flex-col justify-center items-center gap-5 mt-5">
            <div className="">
              <button
                onClick={() => setSignin(true)}
                className="bg-gradient-to-br from-blue-300 to-blue-500 px-10 py-1 rounded-lg text-center hover:from-blue-200 hover:to-blue-400  hover:text-black shadow-md text-white text-lg"
              >
                Login
              </button>
            </div>
            <div className="flex gap-2 justify-center items-center text-white">
              <span className="text-sm">Don&apos;t have an account?</span>
              <button onClick={() => setSignup(true)}>Sign Up</button>
            </div>
          </div>
          {/* <div className="flex justify-center">
            <a
              href="https://cit.ac.in"
              target="_blank"
              className="text-green-200 text-sm hover:underline"
            >
              Central Institute of Technology, Kokrajhar
            </a>
          </div> */}
        </div>
      </div>
    </main>
  );
}
