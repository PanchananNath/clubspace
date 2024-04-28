'use client'
import Image from "next/image";
import ProfilePic from "../../../public/profilePic.jpeg";
import { MdEvent } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";

import { auth } from "@/app/firebase";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await auth.signOut();
      router.push("/signin");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };
  
  return (
    <main className="relative">
      <div className="flex items-center justify-end py-2 fixed top-0 left-0 right-0 bg-white  p-4 z-50">
        <div className="flex gap-5">
          <div className="mt-1">
            <button>
              <IoIosNotifications size={30} />
            </button>
          </div>
          <div className="mt-1">
            <button>
              <MdEvent size={30} />
            </button>
          </div>
          <div className="rounded-full">
            {/* <Dropdown>
              <DropdownTrigger>
                <Button variant="bordered">
                  <Image
                    src={ProfilePic}
                    alt="profilePic"
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                </Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Static Actions" className="bg-[#ebeff0] text-xs p-2 rounded-md grid gap-1">
                <DropdownItem key="new" className="hover:bg-[#c6cccf] mt-1 rounded-sm">uryu@gmail.com</DropdownItem>
                <DropdownItem key="copy" className="hover:bg-[#c6cccf] mt-1 rounded-sm" onClick={() => router.push("./settings")}>Settings</DropdownItem>
                <DropdownItem key="edit" className="hover:bg-[#c6cccf] mt-1 rounded-sm" onClick={handleLogout}>Log out</DropdownItem>
              </DropdownMenu>
            </Dropdown> */}
          </div>
        </div>
      </div>
    </main>
  );
}
