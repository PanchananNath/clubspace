export default function Remainder() {
  return (
    <div className="bg-[#B3DCE9] w-48 h-wrap pb-3 rounded-lg shadow-md">
        <div className="bg-[#60b2cb] p-2 px-3 flex justify-between items-center rounded-lg gap-2">
            <p className="text-[#0F1035] font-semibold">My Remainders</p>
            <button className="font-semibold text-2xl rounded-full hover:bg-[#438498] px-2">+</button>
        </div>

      <div className="grid gap-1 p-3 text-sm text-[#dacece]">
        <div className="p-1 bg-[#365486] px-4 items-center rounded-md">
          <p className="">cyber session</p>
          <p className="text-xs">feb 3 - 9:30am</p>
        </div>
        <div className="p-1 bg-[#365486] px-4 items-center rounded-md">
          <p className="">Robotics</p>
          <p className="text-xs">feb 3 - 9:30am</p>
        </div>
        <div className="p-1 bg-[#365486] px-4 items-center rounded-md">
          <p className="">Ai session</p>
          <p className="text-xs">feb 3 - 9:30am</p>
        </div>
      </div>
    </div>
  );
}
