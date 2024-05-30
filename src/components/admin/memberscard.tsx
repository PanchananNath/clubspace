import Link from "next/link";

export default function MemberCard() {
  return (
    <Link href="/admin/members">
      <div className="bg-secondary h-28 flex flex-col justify-center items-center gap-5 shadow-md shadow-primary hover:scale-105">
        <span className="text-xl text-primary font-semibold">CLUB MEMBERS</span>
        <span className="text-2xl font-semibold text-red-500 animate-bounce">
          50
        </span>
      </div>
    </Link>
  );
}
