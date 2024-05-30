import { MdAccessTime, MdOutlineEvent } from "react-icons/md";
import Link from "next/link";

interface EventsData {
  eventid: number;
  name: string;
  date_time: string;
}

interface EventCardProps {
  data: EventsData;
}

export default function EventCard({ data }: EventCardProps) {
  console.log(data);
  const truncate = (input: string, numWords: number) => {
    const words = input.split(" ");

    if (words.length > numWords) {
      return words.slice(0, numWords).join(" ") + "...";
    }

    return input;
  };

  return (
    <div className="bg-secondary h-36  shadow-md shadow-primary px-5 py-3 space-y-5 hover:shadow-xl hover:shadow-blue-400">
      <div>
        <div className="text-lg text-slate-500 border-b border-slate-400">
          Event ID{" "}
          <span className="text-primary font-semibold">{data.eventid}</span>
        </div>
        <div className="flex gap-2 items-center">
          <MdOutlineEvent />
          {truncate(data.name, 7)}
        </div>
        <div className="flex gap-2 items-center">
          <MdAccessTime />
          {data.date_time}
        </div>
      </div>
      <div className="flex justify-center gap-5 text-sm">
        <Link
          href={`/admin/event/edit/${data.eventid}`}
          className="bg-primary text-white px-7 py-1 rounded-md"
        >
          Edit
        </Link>
      </div>
    </div>
  );
}
