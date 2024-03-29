import { BiCommentDetail } from "react-icons/bi";
import Image from "next/image";
import LikeButton from "./likeButton";

export interface EventProps {
  eventId: number;
  name: string;
  poster: string;
  venue: string;
  dateTime: Date;
  description: string;
  registrationUrl: string;
  qrCode: string;
}

const Events: React.FC<{ event: EventProps }> = ({ event }) => {
  return (
    <div className="bg-secondary p-3 m-5 rounded-xl shadow-2xl">
      <div className="flex items-center mb-2">
        {/* ***********Club logo*********** */}
        <Image
          src={"/logo.png"}
          alt="logo"
          height={40}
          width={40}
          className="mr-3"
        />
        {/* ***********Event Title*********** */}
        <h1 className="font-bold">{event.name}</h1>
      </div>
      {/* ***********Event Description*********** */}
      <p>{event.description}</p>
      {/* ***********Event Poster*********** */}
      <div className="flex justify-center items-center mb-5 mt-5">
        <Image
          src={"/logo.png"}
          alt="logo"
          height={400}
          width={350}
          className="border border-black"
        />
      </div>
      <hr className="border-black" />
      <div className="flex justify-evenly items-center mt-5 mb-5">
        <span className="bg-primary p-2 w-32   flex items-center justify-center gap-3 rounded-lg">
          <LikeButton />
        </span>
        <button className="bg-primary flex items-center p-2 w-32 justify-center gap-3 text-white rounded-lg">
          <BiCommentDetail />
          Query
        </button>
        <button className="bg-primary p-2 w-32 text-white rounded-lg">
          Register
        </button>
      </div>
    </div>
  );
};

export default Events;
