interface EventsData {
  eventid: number;
  name: string;
  date_time: string;
}

interface EventCardProps {
  data: EventsData[];
}

export default function EventCard({ data }: EventCardProps) {
  console.log(data);
  return (
    <div className="bg-secondary h-28  shadow-md shadow-primary">
      <div className="text-xl text-primary font-semibold">{data.eventid}</div>
      <div className="space-x-5">{data.name}</div>
      <div className="space-x-5">{data.date_time}</div>
    </div>
  );
}
