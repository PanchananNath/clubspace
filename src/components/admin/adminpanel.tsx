import Link from "next/link";

export default function AdminPanel() {
  return (
    <div className="bg-secondary h-28 flex flex-col justify-center items-center gap-5 shadow-md shadow-primary">
      <span className="text-xl text-primary font-semibold">EVENTS</span>
      <div className="space-x-5">
        <Link
          href={"/admin/event/add"}
          className="bg-blue-500 px-5 py-1 rounded-md text-white"
        >
          Add
        </Link>
        <Link
          href={"/admin/event/"}
          className="bg-blue-500 px-5 py-1 rounded-md text-white"
        >
          View All
        </Link>
      </div>
    </div>
  );
}
