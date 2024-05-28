import React, { Suspense, useEffect, useState } from "react";
import { useUid } from "../../contexts/id";

interface PopupFormProps {
  setShowPopup: (value: boolean) => void;
}

interface PopUpFormData {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  institute_id: number;
  department_id: number;
  linkdin: string;
  phone: string;
  module: number;
  semester: number;
}

interface Institutes {
  id: number;
  name: string;
}
interface Departments {
  id: number;
  name: string;
}
interface Modules {
  id: number;
  name: string;
}

const PopupForm: React.FC<PopupFormProps> = ({
  setShowPopup,
}: PopupFormProps) => {
  const { uid } = useUid();
  const [iid, setiid] = useState<string>("");

  const [institutes, setInstitutes] = useState<Institutes[]>([]);
  const [departments, setDepartments] = useState<Departments[]>([]);
  const [modules, setModules] = useState<Modules[]>([]);

  const [formData, setFormData] = useState<PopUpFormData>({
    id: "",
    firstname: "",
    lastname: "",
    email: "",
    institute_id: 0,
    module: 0,
    semester: 0,
    department_id: 0,
    linkdin: "test",
    phone: "",
  });

  useEffect(() => {
    fetch("api/getinstitutes")
      .then((res) => res.json())
      .then((data) => {
        setInstitutes(data);
        console.log("institutes", data);
      })
      .catch((e) => console.log(e));
  }, []);

  useEffect(() => {
    fetch("api/getdepartments")
      .then((res) => res.json())
      .then((data) => {
        setDepartments(data);
        console.log("departments", data);
      })
      .catch((e) => console.log(e));
  }, []);
  useEffect(() => {
    fetch("api/getmodules")
      .then((res) => res.json())
      .then((data) => {
        setModules(data);
        console.log("modules", data);
      })
      .catch((e) => console.log(e));
  }, []);

  useEffect(() => {
    if (uid) {
      setiid(uid);
    }
  }, [uid]);

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      id: iid || "",
    }));
  }, [iid]);

  const handleInputChange = (e: { target: { name: any; value: any } }) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async () => {
    if (
      !formData.firstname ||
      !formData.lastname ||
      !formData.email ||
      !formData.institute_id ||
      !formData.module ||
      !formData.semester ||
      !formData.department_id ||
      !formData.linkdin ||
      !formData.phone
    ) {
      alert("please fill all the detils!");
    } else {
      try {
        await fetch("api/insertdata", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: formData.id,
            firstname: formData.firstname,
            lastname: formData.lastname,
            email: formData.email,
            insitute_id: formData.institute_id,
            module: formData.module,
            semester: formData.semester,
            department_id: formData.department_id,
            linkedin: formData.linkdin,
            phone: formData.phone,
          }),
        })
          .then((res) => {
            if (res.ok) {
              window.alert("Success");
              setShowPopup(false);
            }
          })
          .catch((e) => window.alert(e));
      } catch (e) {
        window.alert("Failure");
      }
    }
  };

  console.log(formData);
  return (
    <div className="absolute top-0 left-0 h-full w-full bg-black bg-opacity-10 flex justify-center items-center">
      <div className="relative w-full h-full  sm:w-2/3 sm:h-5/6 overflow-hidden bg-secondary bg-opacity-80 rounded-lg">
        <h1 className="text-center text-xl font-bold mt-5 animate-pulse">
          Please fill the form below!
        </h1>
        <div className="absolute top-1/2 sm:top-[55%] left-1/2 w-full transform -translate-x-1/2 -translate-y-1/2 max-h-[calc(100%-4rem)] overflow-x-auto  custom-scrollbar px-5 sm:px-24 space-y- z-">
          <form action="" className="flex flex-col gap-4">
            <div className="flex flex-col">
              <span className="text-sm font-semibold">First Name</span>
              <input
                type="text"
                name="firstname"
                placeholder="Enter first name"
                autoComplete="firstname"
                value={formData.firstname}
                onChange={handleInputChange}
                required
                className=" border-b-2 border-blue-300 focus:outline-none hover:border-blue-400 focus:border-blue-400 duration-500 bg-transparent "
              />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold">Last Name</span>
              <input
                type="text"
                name="lastname"
                placeholder="Enter last name"
                autoComplete="lastname"
                value={formData.lastname}
                onChange={handleInputChange}
                required
                className=" border-b-2 border-blue-300 focus:outline-none hover:border-blue-400 focus:border-blue-400 duration-500 bg-transparent "
              />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold">Phone</span>
              <input
                type="tel"
                name="phone"
                placeholder="Enter Phone no"
                autoComplete="email"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className=" border-b-2 border-blue-300 focus:outline-none hover:border-blue-400 focus:border-blue-400 duration-500 bg-transparent "
              />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold">Email</span>
              <input
                type="email"
                name="email"
                placeholder="Enter last name"
                autoComplete="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className=" border-b-2 border-blue-300 focus:outline-none hover:border-blue-400 focus:border-blue-400 duration-500 bg-transparent "
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="branch" className="text-sm font-semibold">
                Institute
              </label>
              <div className=" flex justify-between items-center">
                <select
                  onChange={handleInputChange}
                  value={formData.institute_id}
                  name="institute_id"
                  className=" border-b-2 border-blue-300 focus:outline-none hover:border-blue-400 focus:border-blue-400 duration-500 bg-transparent w-full"
                >
                  <option value="">Select Institute</option>
                  {institutes.map((institute) => (
                    <option key={institute.id} value={institute.id}>
                      {institute.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="branch" className="text-sm font-semibold">
                Program/Module
              </label>
              <div className=" flex justify-between items-center">
                <select
                  value={formData.module}
                  onChange={handleInputChange}
                  name="module"
                  className=" border-b-2 border-blue-300 focus:outline-none hover:border-blue-400 focus:border-blue-400 duration-500 bg-transparent w-full"
                >
                  <option value="">Select...</option>
                  {modules.map((module) => (
                    <option key={module.id} value={module.id}>
                      {module.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="year" className="text-sm font-semibold">
                Branch
              </label>
              <div className=" flex justify-between items-center">
                <select
                  value={formData.department_id}
                  onChange={handleInputChange}
                  name="department_id"
                  className=" border-b-2 border-blue-300 focus:outline-none hover:border-blue-400 focus:border-blue-400 duration-500 bg-transparent w-full"
                >
                  <option value="" className="text-sm font-semibold">
                    Select...
                  </option>
                  {departments.map((department) => (
                    <option key={department.id} value={department.id}>
                      {department.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="year" className="text-sm font-semibold">
                Semester
              </label>
              <div className=" flex justify-between items-center">
                <select
                  value={formData.semester}
                  onChange={handleInputChange}
                  name="semester"
                  className=" border-b-2 border-blue-300 focus:outline-none hover:border-blue-400 focus:border-blue-400 duration-500 bg-transparent w-full"
                >
                  <option value="" className="text-sm font-semibold">
                    Select...
                  </option>
                  <option value={1}>1st</option>
                  <option value={2}>2nd</option>
                  <option value={3}>3rd</option>
                  <option value={4}>4th</option>
                  <option value={5}>5th</option>
                  <option value={6}>6th</option>
                  <option value={7}>7th</option>
                  <option value={8}>8th</option>
                </select>
              </div>
            </div>

            {/* <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-900">Name of Institute</label>
              <select
                name="institute_id"
                value={formData.institute_id}
                required
                onChange={handleInputChange}
                className="p-2 text-xs rounded-sm border text-gray-600"
              >
                <option value={0} disabled>
                  Select Institute
                </option>
                <option value={1}>CIT</option>
                <option value={2}>Bodoland University ,Kokrajhar Assam</option>
                <option value={3}>
                  Kokrajhar Govt. College, Kokrajhar Assam
                </option>
                <option value="Science College, Kokrajhar Assam">
                  Science College, Kokrajhar Assam
                </option>
              </select>
            </div> */}

            {/* <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-900">Program/Module</label>
              <select
                name="module"
                value={formData.module}
                required
                onChange={handleInputChange}
                className="p-2 text-xs rounded-md border pr-2 text-gray-600"
              >
                <option value={0} disabled>
                  Select Module
                </option>
                <option value={1}>Diploma</option>
                <option value={2}>BTech</option>
                <option value={3}>MTech</option>
                <option value={4}>PHD</option>
              </select>
            </div> */}
            {/* <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-900">Semester</label>
              <select
                name="semester"
                value={formData.semester}
                required
                onChange={handleInputChange}
                className="p-2 text-xs rounded-md border text-gray-600"
              >
                <option value={0} disabled>
                  Select Semester
                </option>
                <option value={1}>1st</option>
                <option value={2}>2nd</option>
                <option value={3}>3rd</option>
                <option value={4}>4th</option>
                <option value={5}>5th</option>
                <option value={6}>6th</option>
                <option value={7}>7th</option>
                <option value={8}>8th</option>
              </select>
            </div> */}
            {/* <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-900">Branch/Department</label>
              <select
                name="department_id"
                value={formData.department_id}
                required
                onChange={handleInputChange}
                className="p-2 text-xs rounded-md border text-gray-600"
              >
                <option value={0} disabled>
                  Select Branch
                </option>
                <option value={1}>CSE</option>
                <option value={2}>CE</option>
                <option value={3}>ECE</option>
                <option value={4}>FET</option>
                <option value={5}>IE</option>
                <option value={6}>MCD</option>
              </select>
            </div> */}
            {/* <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-900">Linkdin</label>
              <input
                type="url"
                name="linkdin"
                placeholder="Linkdin account link"
                autoComplete="url"
                value={formData.linkdin}
                required
                onChange={handleInputChange}
                className="p-2 text-xs rounded-md border"
              />
            </div> */}
            {/* <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-900">Phone number</label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter phone number"
                autoComplete="tel"
                value={formData.phone}
                required
                onChange={handleInputChange}
                className="p-2 text-xs rounded-md border"
              />
            </div> */}

            <div className="flex justify-center">
              <button
                onClick={handleSubmit}
                className="bg-gradient-to-r from-blue-400 via-blue-400 to-blue-700  text-white px-10 py-1 rounded-md hover:from-blue-700 hover:via-blue-400 hover:to-blue-400 mt-10 sm:mt-0"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PopupForm;
