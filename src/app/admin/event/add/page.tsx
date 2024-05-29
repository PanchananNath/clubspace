import SideBar from "@/components/common/SideBar";
import EventForm from "../form";

export default function AddEvent() {
  return (
    <main className="h-screen flex overflow-hidden bg-primary">
      <SideBar />
      <div className="flex flex-col overflow-y-auto w-full m-1 rounded-lg bg-white px-5">
        <EventForm />
      </div>
    </main>
  );
}
