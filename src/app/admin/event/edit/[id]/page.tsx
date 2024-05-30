import SideBar from "@/components/common/SideBar";
import EventForm from "../../form";

export default async function ModifyEvent(props: { params: { id: number } }) {
  try {
    const res = await fetch(
      `http://localhost:3000/api/getmodifyeventdata?id=${props.params.id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-cache",
      }
    );
    const data = await res.json();
    console.log(data[0]);

    return (
      <main className="h-screen flex overflow-hidden bg-primary">
        <SideBar /> {props.params.id}
        <div className="flex flex-col overflow-y-auto w-full m-1 rounded-lg bg-white px-5 custom-scrollbar">
          <EventForm edit={true} data={data[0]} eventid={props.params.id} />
        </div>
      </main>
    );
  } catch (err) {
    console.log(err);
  }
}
