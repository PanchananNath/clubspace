import { IoMdCloseCircleOutline } from "react-icons/io";

export interface WhatsNewProps {
  setWhatsNew: (value: boolean) => void;
}

const whatsNewList = [
  "Added new feature to create and manage events",
  "Added new feature to create and manage clubs",
  "Added new feature to create and manage members",
  "Added new feature to create and manage accounts",
  "Added new feature to create and manage settings",
  "Added new feature to create and manage dashboard",
  "Added new feature to create and manage profile",
];

export default function WhatsNew({ setWhatsNew }: WhatsNewProps) {
  return (
    <div className="bg-opacity-50 bg-black absolute h-full w-full top-0 flex justify-center items-center z-40">
      <div className="relative bg-slate-800 w-2/3 p-3 rounded-xl">
        <button onClick={() => setWhatsNew(false)} className="absolute right-5">
          <IoMdCloseCircleOutline className="text-3xl text-white" />
        </button>

        <section className="text-white px-5">
          <h1 className="text-center my-2 text-lg font-bold border-b-2 border-slate-500">
            What&apos;s New
          </h1>
          <section className="px-5 text-sm">
            <ul>
              {whatsNewList.map((whatsNew, index) => (
                <li key={index} className="border-b border-slate-500 py-1">
                  {whatsNew}
                </li>
              ))}
            </ul>
          </section>
        </section>
      </div>
    </div>
  );
}
