import { IoMdCloseCircleOutline } from "react-icons/io";

interface QueryProps {
  setOpenQuery: (query: boolean) => void;
}
export default function Qeury({ setOpenQuery }: QueryProps) {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50 bg-black bg-opacity-50">
      <div className="relative bg-secondary h-1/2 w-1/2 rounded-md">
        <button
          onClick={() => setOpenQuery(false)}
          className="absolute sm:right-1 sm:top-1 right-5 top-5"
        >
          <IoMdCloseCircleOutline className="text-3xl text-blue-600" />
        </button>
        <div className="flex flex-col gap-2 h-full overflow-hidden px-3 py-6 mt-4">
          <div className="flex flex-col h-full border-2 border-slate-400 p-1 rounded-md">
            <span className="text-sm text-slate-600 font-semibold mb-2 border-b border-slate-400">
              Any Query?
            </span>
            <textarea
              //   type="text"
              name=""
              id=""
              placeholder="Enter your querry here..."
              style={{ resize: "none" }}
              className=" border-b- border-blue-300 focus:outline-none duration-500 bg-transparent h-full custom-scrollbar"
            />
          </div>
          <div className="flex justify-center">
            <button className="bg-gradient-to-r from-blue-400 via-blue-400 to-blue-700  text-white px-10 py-1 rounded-md hover:from-blue-700 hover:via-blue-400 hover:to-blue-400 mt-10 sm:mt-0">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
