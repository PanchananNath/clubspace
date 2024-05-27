import Image from "next/image";
import SideBar from "@/components/common/SideBar";
import ProfileBar from "@/components/common/profilebar";
import ClubCard from "@/components/clubs/clubcard";

export default async function Clubs() {
  try {
    const url = "https://clubspace.vercel.app/api/getclubsdata";
    const url2 = "http://localhost:3000/api/getclubsdata";
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        cache: "no-cache",
      },
    });
    if (response.status === 404) {
      // Handle 404 error here
      console.error("Error: Not Found");
      return;
    }
    const data = await response.json();
    // console.log(data);

    return (
      <main className="h-screen flex overflow-hidden bg-primary">
        <SideBar />
        <div className="flex flex-col overflow-y-auto w-full m-1 rounded-lg bg-white px-5 custom-scrollbar">
          <ProfileBar />
          <h1 className="text-2xl text-primary font-bold border-b-2 border-slate-400 mb-3">
            All Clubs
          </h1>
          <div className="grid sm:grid-cols-2 gap-5 z-10">
            {data.map((club: any, index: number) => (
              <ClubCard key={index} data={club} allclubsdata={data} />
            ))}
          </div>
          <Image
            src={`/logo.png`}
            height={500}
            width={500}
            alt=""
            className="absolute z-0 top-1/2 left-1/2 sm:left-[60%] transform -translate-x-1/2 -translate-y-1/2 opacity-20"
          />
        </div>
      </main>
    );
  } catch (error) {
    console.error("Error retrieving data from PostgreSQL:", error);
    return <div>Error</div>;
  }
}
