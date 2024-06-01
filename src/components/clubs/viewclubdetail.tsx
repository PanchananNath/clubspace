import { IoIosCall, IoMdCloseCircleOutline } from "react-icons/io";
import { AllClubsData } from "./clubcard";
import Image from "next/image";
import { CiGlobe } from "react-icons/ci";
import { HiOutlineMail } from "react-icons/hi";
import { ImLinkedin } from "react-icons/im";
import { FaInstagram, FaSquareFacebook } from "react-icons/fa6";
import "react-responsive-carousel/lib/styles/carousel.min.css"; //
import { Carousel } from "react-responsive-carousel";

export interface ViewClubDetailProps {
  setViewClub: (value: boolean) => void;
  data: AllClubsData;
}
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
export default function ViewClubDetail({
  setViewClub,
  data,
}: ViewClubDetailProps) {
  return (
    <div className="absolute top-0 left-0 h-full w-full bg-black bg-opacity-50 flex justify-center items-center">
      <div className="relative w-full h-full  sm:w-5/6 sm:h-5/6 sm:overflow-hidden bg-secondary rounded-lg">
        <button
          onClick={() => setViewClub(false)}
          className="absolute sm:right-1 sm:top-1 right-5 top-5 z-10"
        >
          <IoMdCloseCircleOutline className="text-3xl text-[#6f9ded]" />
        </button>
        <h1 className="text-center text-xl font-bold py-3 animate-pulse">
          {data.name}
        </h1>
        <Image
          src={`/logo.png`}
          height={500}
          width={500}
          alt=""
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-20"
        />
        <div className="absolute top-1/2 sm:top-[55%] left-1/2 w-full transform -translate-x-1/2 -translate-y-1/2 sm:max-h-[calc(100%-4rem)] sm:overflow-x-auto  custom-scrollbar px-5  space-y-5 z-5">
          <div className="flex justify-center items-center h-96">
            {/* <Image
              src={data.poster}
              alt={data.name}
              height={1000}
              width={1000}
              className="w-52"
            /> */}
            <Carousel
              showIndicators={false}
              showThumbs={false}
              showStatus={false}
              showArrows={false}
              autoPlay={true}
              interval={3000} // 3 seconds
              infiniteLoop={true}
              className="h-96 w-1/2 overflow-hidden"
            >
              {images.map((image, index) => (
                <div key={index}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    height={2000}
                    width={2000}
                    quality={80}
                    className="object-cover h-screen"
                  />
                </div>
              ))}
            </Carousel>
          </div>
          <p>
            <span className="font-semibold">Overview:</span> {data.objective}
          </p>
          <p>
            <span className="font-semibold">Vision/Mission:</span> {data.vision}{" "}
          </p>
          <div className="grid grid-cols-6 bg-blue-100 py-2 px-2">
            {data.socialmedia.phone ? (
              <div className="flex justify-normal items-center gap-2 text-lg">
                <IoIosCall />
                <a href={`tel:${data.socialmedia.phone}`} className="text-sm">
                  {data.socialmedia.phone}
                </a>
              </div>
            ) : null}
            {data.socialmedia.website ? (
              <div className="flex justify-normal items-center gap-2 text-lg">
                <CiGlobe />
                <a
                  href={data.socialmedia.website}
                  target="_blank"
                  className="text-sm"
                >
                  {data.name}
                </a>
              </div>
            ) : null}
            {data.socialmedia.email ? (
              <div className="flex justify-normal items-center gap-2 text-lg">
                <HiOutlineMail />
                <a
                  href={`mailto:${data.socialmedia.email}`}
                  className="text-sm"
                >
                  {data.socialmedia.email}
                </a>
              </div>
            ) : null}
            {data.socialmedia.linkedin ? (
              <div className="flex justify-normal items-center gap-2 text-lg">
                <ImLinkedin />
                <a
                  href={data.socialmedia.linkedin}
                  target="_blank"
                  className="text-sm"
                >
                  LinkedIn
                </a>
              </div>
            ) : null}
            {data.socialmedia.instagram ? (
              <div className="flex justify-normal items-center gap-2 text-lg">
                <FaInstagram />
                <a
                  href={data.socialmedia.instagram}
                  target="_blank"
                  className="text-sm"
                >
                  Instagram
                </a>
              </div>
            ) : null}
            {data.socialmedia.facebook ? (
              <div className="flex justify-normal items-center gap-2 text-lg">
                <FaSquareFacebook />
                <a
                  href={data.socialmedia.facebook}
                  target="_blank"
                  className="text-sm"
                >
                  Facebook
                </a>
              </div>
            ) : null}
          </div>
          <div className="pb-5">
            <p className="font-semibold">Faculty Incharge</p>
            <div className="grid grid-cols-2 gap-5 my-2">
              <div className="flex gap-3  ">
                <Image
                  src={"/logo.png"}
                  height={500}
                  width={500}
                  alt=""
                  className="h-36 w-36"
                />
                <div className="flex flex-col justify-between">
                  {" "}
                  <div>
                    {" "}
                    <h1 className="font-semibold">Dr. Pranav Kumar Singh</h1>
                    <h2 className="text-xs">
                      Associate Professor,Dean Alumni and External Relations
                      Dept. of CSE, CITK
                    </h2>
                  </div>
                  <div className="text-sm">
                    <p>Linkedin</p>
                    <p>Website</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-3  ">
                <Image
                  src={"/logo.png"}
                  height={500}
                  width={500}
                  alt=""
                  className="h-36 w-36"
                />
                <div className="flex flex-col justify-between">
                  {" "}
                  <div>
                    {" "}
                    <h1 className="font-semibold">Dr. Pankaj Pratap Singh</h1>
                    <h2 className="text-xs">
                      Faculty Incharge Assistant Professor Dept. of CSE, CITK
                    </h2>
                  </div>
                  <div className="text-sm">
                    <p>Linkedin</p>
                    <p>Website</p>
                  </div>
                </div>
              </div>
            </div>
            <p className="font-semibold">Core Team</p>
            <div className="grid grid-cols-2 gap-5 my-2">
              <div className="flex gap-3  ">
                <Image
                  src={"/logo.png"}
                  height={500}
                  width={500}
                  alt=""
                  className="h-36 w-36"
                />
                <div className="flex flex-col justify-between">
                  {" "}
                  <div>
                    {" "}
                    <h1 className="font-semibold">Anowar Hussain Mondal</h1>
                    <h2 className="text-xs">Chief Convernor</h2>
                  </div>
                  <div className="text-sm">
                    <p>Linkedin</p>
                    <p>Website</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-3  ">
                <Image
                  src={"/logo.png"}
                  height={500}
                  width={500}
                  alt=""
                  className="h-36 w-36"
                />
                <div className="flex flex-col justify-between">
                  {" "}
                  <div>
                    {" "}
                    <h1 className="font-semibold">Jahnabi Medhi</h1>
                    <h2 className="text-xs">Research Convernor</h2>
                  </div>
                  <div className="text-sm">
                    <p>Linkedin</p>
                    <p>Website</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
