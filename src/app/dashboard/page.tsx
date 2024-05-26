"use client";

import { Suspense, useEffect, useState } from "react";
import { useEmailAndName } from "@/contexts/emailAndName";
import SideBar from "@/components/common/SideBar";
import ProfileBar from "@/components/common/profilebar";
// import { usePathname } from "next/navigation";

export default function DashboardPage() {
  // const pathname = usePathname();
  // console.log(pathname);

  const [showPopup, setShowPopup] = useState(false);
  const { id, firstname } = useEmailAndName();

  useEffect(() => {
    if (!id) {
      setShowPopup(true);
    }
  }, [id]);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const handleSubmit = () => {
    console.log("form submitted");
    togglePopup();
  };

  return (
    // <Suspense fallback={<LoadingSkeleton />}>
    <main className="h-screen flex overflow-hidden bg-primary">
      <SideBar />
      <div className="flex flex-col overflow-y-auto w-full m-1 rounded-lg bg-white px-5">
        <ProfileBar />
        {/* <div className="bg-white relative h-screen w-full rounded-2xl bg-static">
          <Image
            alt="Mountains"
            src={logo}
            placeholder="blur"
            quality={100}
            fill
            sizes="100vw"
            className="fixed top-0 left-0 w-full h-full -z-0 object-contain opacity-90 pt-5"
          />

          <div className="px-11 relative mt-16 h-5/6">
            <h2 className="text-2xl text-[#365486] font-bold">
              Hello {firstname}!
            </h2>
            <div className="bg-[#DCF2F1] h-auto pt-10 p-7 mb-5 z-10  rounded-2xl bg-opacity-70 flex justify-between flex-wrap">
              <div className="">
                <div className="text-2xl text-[#365486] font-bold mb-4 ">
                  My Clubs
                </div>
              </div>
              <div className="grid gap-4">
                <Calendar />
                <Remainder />
              </div>
            </div> */}

        {/* Popup */}
        {/* <div className="fixed inset-0 flex items-center justify-center z-40">
              {showPopup && (
                <PopupForm onClose={togglePopup} onSubmit={handleSubmit} />
              )}
            </div> */}
        {/* End Popup */}
        {/* </div>
        </div> */}
      </div>
    </main>
    // </Suspense>
  );
}
