import Image from "next/image";
import ProfilePic from "../../../public/profilePic.jpeg";
import { MdEvent } from "react-icons/md";

export default function Navbar() {
  return (
    <>
      <main>
        <div className="flex justify-end py-2">
          <div className="flex px-5 gap-5 ">
            <div className="mt-1">
              <MdEvent size={30} />
            </div>
            <div className="rounded-full ">
              {" "}
              <Image
                src={ProfilePic}
                alt="profilePic"
                width={32}
                height={32}
                style={{ borderRadius: "50%" }}
              />{" "}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
