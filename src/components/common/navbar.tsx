import Image from "next/image";
import ProfilePic from "../../../public/profilePic.jpeg";
import { MdEvent } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";

export default function Navbar() {
  return (
    <main className="relative">
      <div className="flex items-center justify-end py-2 fixed top-0 left-0 right-0 bg-white  p-4 z-50">
        <div className="flex gap-5">
          <div className="mt-1">
          <IoIosNotifications size={30}/>
          </div>
          <div className="mt-1">
          <MdEvent size={30}/>
          </div>
          <div className="rounded-full">
            <Image
              src={ProfilePic}
              alt="profilePic"
              width={32}
              height={32}
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
