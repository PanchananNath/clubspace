import React, { Suspense, useEffect, useState } from "react";
import { useUid } from "../../contexts/store";

interface PopupFormProps {
  onClose: () => void;
  onSubmit: () => void;
}

interface PopUpFormData {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  institute_id: number;
  module: number;
  semester: number;
  department_id: number;
  linkdin: string;
  phone: string;
}

const PopupForm: React.FC<PopupFormProps> = ({ onClose, onSubmit }) => {
  const { uid } = useUid();
  const [iid, setiid] = useState<string>('');
  

  const [formData, setFormData] = useState<PopUpFormData>({
    id: "",
    firstname: "",
    lastname: "",
    email: "",
    institute_id: 0,
    module: 0,
    semester: 0,
    department_id: 0,
    linkdin: "",
    phone: "",
  });

  useEffect(() => {
    if(uid) {
      setiid(uid);
    }
  }, [uid]);

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      id: iid || ''
    }));
  }, [iid]);

  const handleInputChange = (e: { target: { name: any; value: any } }) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };


  const handleSubmit = async () => {
    //console.log(formData);
    try{
        await fetch(
          'api/insertdata', {
            method: 'POST',
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              id: formData.id,
              firstname: formData.firstname,
              lastname: formData.lastname,
              email: formData.email,
              insitute: formData.institute_id,
              module: formData.module,
              semester: formData.semester,
              dept: formData.department_id,
              linkedin: formData.linkdin,
              phone: formData.phone
            })
          }
        )
          .then((res) => {
            if (res.ok) {
              window.alert("Success");
            }
          })
          .catch((e) => window.alert(e));
      } catch (e) {
        window.alert("Failure");
      }

    onClose();
    onSubmit();
  };
  

  return (
    <div className="fixed w-3/4 h-4/5 overflow-auto bg-white p-8 rounded-lg shadow-md z-0">
      <div className="bg-white w-full rounded-md">
        <div>
          <h3 className="font-bold  text-[#365486] mb-5">
            Please fill the form below!
          </h3>
          <form action="" className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-900">FirstName</label>
              <input
                type="text"
                name="firstname"
                placeholder="Enter your FirstName"
                autoComplete="firstname"
                value={formData.firstname}
                onChange={handleInputChange}
                required
                className="p-2 text-xs rounded-md border"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-900">LastName</label>
              <input
                type="text"
                name="lastname"
                placeholder="Enter your LastName"
                autoComplete="lastname"
                value={formData.lastname}
                onChange={handleInputChange}
                required
                className="p-2 text-xs rounded-md border"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-900">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your Email"
                autoComplete="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="p-2 text-xs rounded-md border"
              />
            </div>
            <div className="flex flex-col gap-1">
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
            </div>

            <div className="flex flex-col gap-1">
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
            </div>
            <div className="flex flex-col gap-1">
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
            </div>
            <div className="flex flex-col gap-1">
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
            </div>
            <div className="flex flex-col gap-1">
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
            </div>
            <div className="flex flex-col gap-1">
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
            </div>
            <button
              type="button"
              onClick={handleSubmit}
              className="bg-[#4467a3] rounded-lg text-white p-2 w-32 mt-5 hover:scale-105 duration-300 hover:bg-[#365486]"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PopupForm;
