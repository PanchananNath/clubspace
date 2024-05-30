"use client";

import Alert from "@/components/account/alert";
import Spinner from "@/components/account/spinner";
import { useEmailAndName } from "@/contexts/emailAndName";
import { set } from "firebase/database";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoMdArrowBack } from "react-icons/io";

interface FormDataTypes {
  clubid?: number;
  name: string;
  poster: string;
  venue: string;
  date_time: string;
  description: string;
  registration_url: string;
  qr_code: string;
  sponsorname?: string;
  sponsor_url?: string;
  sponsor_logo?: string;
}

interface EventFormProps {
  data: FormDataTypes;
  edit?: boolean;
  eventid?: number;
}

export default function EventForm({ data, edit, eventid }: EventFormProps) {
  console.log("edit data:", data);
  console.log("eventid:", eventid);
  const [alertMessage, setAlertMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [loadingone, setLoadingone] = useState(false);
  const [qrCodeFileName, setQrCodeFileName] = useState("Choose File");
  const [posterFileName, setPosterFileName] = useState("Choose File");
  const [sponsorLogoFileName, setSponsorLogoFileName] = useState("Choose File");
  const { id } = useEmailAndName();
  const [formData, setFormData] = useState<FormDataTypes>(
    edit
      ? data
      : {
          name: "",
          poster: "",
          venue: "",
          date_time: "",
          description: "",
          registration_url: "",
          qr_code: "",
          sponsorname: "",
          sponsor_url: "",
          sponsor_logo: "",
        }
  );
  console.log("formData:", formData);
  if (!edit) {
    useEffect(() => {
      const getClubId = async () => {
        try {
          if (id) {
            const res = await fetch(
              `http://localhost:3000/api/getclubid?id=${id.toString()}`,
              {
                method: "GET",
                headers: {
                  "Content-Type": "application/json",
                },
              }
            );
            const data = await res.json();
            const clubId = data[0].club_id;
            setFormData({ ...formData, clubid: clubId });
            console.log(data[0].club_id);
          }
        } catch (err) {
          console.log(err);
        }
      };
      getClubId();
    }, [id]);
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleQrCodeFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setQrCodeFileName(e.target.files[0].name);
    }
  };

  const handlePosterFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setPosterFileName(e.target.files[0].name);
    }
  };

  const handleSponsorLogoFileChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.files && e.target.files.length > 0) {
      setSponsorLogoFileName(e.target.files[0].name);
    }
  };

  const handleSave = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:3000/api/postevent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      setLoading(false);
      setAlertMessage("Event added successfully");
    } catch (err) {
      console.log(err);
      setLoading(false);
      setAlertMessage("Error adding event");
    } finally {
      window.location.href = "/admin/event";
    }
  };

  const handleDelete = async () => {
    setLoadingone(true);
    try {
      const res = await fetch(
        `http://localhost:3000/api/deleteevent?id=${eventid}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          // body: JSON.stringify(formData),
        }
      );
      const data = await res.json();
      console.log(data);
      setLoadingone(false);
      setAlertMessage("Event deleted successfully");
    } catch (err) {
      console.log(err);
      setLoadingone(false);
      setAlertMessage("Error deleting event");
    } finally {
      window.location.href = "/admin/event";
    }
  };

  return (
    <div
      className="w-full space-y-5 p-7"
      style={{
        backgroundImage: `url("/bglogo.png")`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative flex w-full items-center">
        <Link
          href="/admin/event"
          className="flex items-center gap-1 font-semibold text-slate-500 hover:text-black"
        >
          <IoMdArrowBack />
          Back
        </Link>
        <h3 className="absolute left-1/2 transform -translate-x-1/2 text-center text-xl font-semibold text-primary">
          {edit ? "Edit Event" : "Add Event"}
        </h3>
      </div>
      {/* Form */}
      <div className=" bg-secondary p-7 rounded-md space-y-3 bg-opacity-90">
        <div className="flex flex-col">
          <span className="text-sm font-semibold">Event Name</span>
          <input
            value={formData.name}
            type="text"
            name="name"
            onChange={handleInputChange}
            placeholder="Enter Event Name"
            className=" border-b-2 border-blue-200 focus:outline-none hover:border-blue-400 focus:border-blue-400 duration-500 bg-transparent"
          />
        </div>
        <div className="grid grid-cols-2 gap-10">
          <div className="flex flex-col">
            <span className="text-sm font-semibold">Venue</span>
            <input
              value={formData.venue}
              type="text"
              name="venue"
              onChange={handleInputChange}
              placeholder="Enter Venue"
              className=" border-b-2 border-blue-200 focus:outline-none hover:border-blue-400 focus:border-blue-400 duration-500 bg-transparent "
            />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold">Date & Time</span>
            <input
              value={formData.date_time}
              type="datetime-local"
              name="date_time"
              onChange={handleInputChange}
              placeholder="Enter Roll No"
              className=" border-b-2 border-blue-200 focus:outline-none hover:border-blue-400 focus:border-blue-400 duration-500 bg-transparent "
            />
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-semibold">Description</span>
          <textarea
            value={formData.description}
            name="description"
            onChange={handleTextAreaChange}
            placeholder="Enter Description"
            className=" border-b-2 border-blue-200 focus:outline-none hover:border-blue-400 focus:border-blue-400 duration-500 bg-transparent h-52 custom-scrollbar resize-none"
          />
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-semibold">Registration Url</span>
          <input
            value={formData.registration_url}
            type="text"
            name="registration_url"
            onChange={handleInputChange}
            placeholder="Enter Registration Url"
            className=" border-b-2 border-blue-200 focus:outline-none hover:border-blue-400 focus:border-blue-400 duration-500 bg-transparent"
          />
        </div>
        <div className="grid grid-cols-2 gap-10">
          <div className="flex flex-col">
            <span className="text-sm font-semibold">QR Code</span>
            <label
              htmlFor="fileUpload"
              className="border-b-2 border-blue-200 focus:outline-none hover:border-blue-400 focus:border-blue-400 duration-500 bg-transparent py-1"
            >
              <span className="bg-gradient-to-tr from-blue-400 to-blue-600 hover:from-blue-600 hover:to-blue-400 text-white px-2 py-1 rounded-md mr-1">
                Choose File
              </span>
              {qrCodeFileName}
            </label>
            <input
              type="file"
              name="qr_code"
              id="fileUpload"
              placeholder="Enter Venue"
              className="hidden"
              onChange={handleQrCodeFileChange}
            />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold">Poster</span>
            <label
              htmlFor="posterUpload"
              className="border-b-2 border-blue-200 focus:outline-none hover:border-blue-400 focus:border-blue-400 duration-500 bg-transparent py-1"
            >
              <span className="bg-gradient-to-tr from-blue-400 to-blue-600 hover:from-blue-600 hover:to-blue-400 text-white px-2 py-1 rounded-md mr-1">
                Choose File
              </span>
              {posterFileName}
            </label>
            <input
              type="file"
              name="poster"
              id="posterUpload"
              placeholder="Enter Venue"
              className="hidden"
              onChange={handlePosterFileChange}
            />
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-semibold">Sponsor Name</span>
          <input
            value={formData.sponsorname}
            type="text"
            name="sponsorname"
            onChange={handleInputChange}
            placeholder="Enter Sponsor Name (if any)"
            className=" border-b-2 border-blue-200 focus:outline-none hover:border-blue-400 focus:border-blue-400 duration-500 bg-transparent"
          />
        </div>
        <div className="grid grid-cols-2 gap-10">
          <div className="flex flex-col">
            <span className="text-sm font-semibold">Sponsor Url</span>
            <input
              value={formData.sponsor_url}
              type="text"
              name="sponsor_url"
              onChange={handleInputChange}
              placeholder="Enter Sponsor URL (if any)"
              className=" border-b-2 border-blue-200 focus:outline-none hover:border-blue-400 focus:border-blue-400 duration-500 bg-transparent"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold">Sponsor Logo</span>
            <label
              htmlFor="sponsorLogoUpload"
              className="border-b-2 border-blue-200 focus:outline-none hover:border-blue-400 focus:border-blue-400 duration-500 bg-transparent py-1"
            >
              <span className="bg-gradient-to-tr from-blue-400 to-blue-600 hover:from-blue-600 hover:to-blue-400 text-white px-2 py-1 rounded-md mr-1">
                Choose File
              </span>
              {sponsorLogoFileName}
            </label>
            <input
              type="file"
              name="sponsor_logo"
              id="sponsorLogoUpload"
              placeholder="Enter Venue"
              className="hidden"
              onChange={handleSponsorLogoFileChange}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-5">
        <button
          onClick={handleSave}
          disabled={loading} // disable the button while saving
          className="bg-gradient-to-r from-blue-400 via-blue-400 to-blue-700  text-white px-10 py-2 rounded-md hover:from-blue-700 hover:via-blue-400 hover:to-blue-400  sm:mt-0"
        >
          {loading ? <Spinner /> : "Save"}
        </button>
        {edit && (
          <button
            onClick={handleDelete}
            disabled={loadingone} // disable the button while saving
            className="bg-gradient-to-r from-red-400 via-red-400 to-red-700  text-white px-10 py-2 rounded-md hover:from-red-700 hover:via-red-400 hover:to-red-400  sm:mt-0"
          >
            {loadingone ? <Spinner /> : "Delete"}
          </button>
        )}
      </div>
      {alertMessage && (
        <Alert
          message={alertMessage}
          onClose={() => setAlertMessage(null)}
          ClassName="fixed top-0 left-0 w-full h-screen flex justify-center items-center bg-black bg-opacity-20"
        />
      )}
    </div>
  );
}
