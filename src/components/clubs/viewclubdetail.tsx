import { IoIosCall, IoMdCloseCircleOutline } from "react-icons/io";
import { AllClubsData } from "./clubcard";
import Image from "next/image";
import { CiGlobe } from "react-icons/ci";
import { HiOutlineMail } from "react-icons/hi";
import { ImLinkedin } from "react-icons/im";
import { FaInstagram, FaSquareFacebook } from "react-icons/fa6";

export interface ViewClubDetailProps {
  setViewClub: (value: boolean) => void;
  data: AllClubsData;
}

export default function ViewClubDetail({
  setViewClub,
  data,
}: ViewClubDetailProps) {
  return (
    <div className="absolute top-0 left-0 h-full w-full bg-black bg-opacity-20 flex justify-center items-center">
      <div className="relative w-5/6 h-5/6 overflow-hidden bg-blue-200 rounded-lg">
        <button
          onClick={() => setViewClub(false)}
          className="z-50 absolute right-1 top-1"
        >
          <IoMdCloseCircleOutline className="text-3xl text-blue-500" />
        </button>
        <h1 className="text-center text-xl font-bold py-3 animate-pulse">
          {data.name}
        </h1>
        <div className="max-h-[calc(100%-4rem)] overflow-x-auto  custom-scrollbar  p-2 space-y-5 pb-2">
          <div className="flex justify-center items-center h-52">
            <Image
              src={data.poster}
              alt={data.name}
              height={1000}
              width={1000}
              className="w-52"
            />
          </div>
          <p>Overview: {data.objective}</p>
          <p>Vision: {data.vision} </p>
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
          <div className="">
            <p>Core Members</p>
            <div className="grid grid-cols-6 gap-5 h-32 w-full">
              <p className="bg-red-300 h-32">Member 1</p>
              <p className="bg-red-300 h-32">Member 1</p>
              <p className="bg-red-300 h-32">Member 1</p>
              <p className="bg-red-300 h-32">Member 1</p>
              <p className="bg-red-300 h-32">Member 1</p>
              <p className="bg-red-300 h-32">Member 1</p>
              <p className="bg-red-300 h-32">Member 1</p>
              <p className="bg-red-300 h-32">Member 1</p>
              <p className="bg-red-300 h-32">Member 1</p>
              <p className="bg-red-300 h-32">Member 1</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
