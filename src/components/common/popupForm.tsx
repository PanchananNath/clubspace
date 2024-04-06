import { auth } from "@/app/firebase";
import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";

interface PopupFormProps {
  onClose: () => void;
  onSubmit: () => void;
}

// const PopupForm: React.FC<PopupFormProps> = ({ onClose, onSubmit }) => {
//   const [firstname, setFirstName] = useState("");
//   const [lastname, setLastName] = useState('');
//   const [email, setEmail] = useState("");
//   const [institute, setinstitute] = useState('');
//   const [module, setmodule] = useState('');
//   const [semester, setsemester] = useState('');
//   const [dept, setdept] = useState('');
//   const [linkdin, setlinkdin] = useState("");
//   const [phone, setphone] = useState("");

  

//   const handleSubmit = async (e: { preventDefault: () => void; }) => {
//     e.preventDefault(); 
//     if (!firstname || !lastname || !email || !institute || !module || !semester || !dept || !linkdin || !phone) {
//       alert("Please fill all fields before submitting.");
//       return;
//     }

//     // onClose();
//     //onSubmit();
//   };

const PopupForm: React.FC<PopupFormProps> = ({ onClose, onSubmit }) => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState("");
  const [institute, setinstitute] = useState('');
  const [module, setmodule] = useState('');
  const [semester, setsemester] = useState('');
  const [dept, setdept] = useState('');
  const [linkdin, setlinkdin] = useState("");
  const [phone, setphone] = useState("");

  let uid: string;
  useEffect(() =>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if(user) {
        uid = user.uid;
      }
    });
    return () => unsubscribe();
  }, []);

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault(); 
    if (!firstname || !lastname || !email || !institute || !module || !semester || !dept || !linkdin || !phone) {
      alert("Please fill all fields before submitting.");
      return;
    }

    try {
      const response = await fetch('../../../pages/api/insertdata', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ uid, firstname, lastname, email, institute, module, semester, dept, linkdin, phone })
      });
      if (response.ok) {
        alert("Data submitted successfully!");
        onClose();
        onSubmit();
      } else {
        alert("Error submitting data!");
      }
    } catch (error) {
      console.error('Error submitting data:', error);
      alert("Error submitting data!");
    }
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
                value={firstname}
                onChange={(e) => setFirstName(e.target.value)}
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
                value={lastname}
                onChange={(e) => setLastName(e.target.value)}
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="p-2 text-xs rounded-md border"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-900">Name of Institute</label>
              <select
                value={institute}
                required
                onChange={(e) => setinstitute(e.target.value)}
                className="p-2 text-xs rounded-sm border text-gray-600"
              >
                <option value="" disabled >
                  Select Institute
                </option>
                <option value={1}>CIT</option>
                <option value={2}>Bodoland University ,Kokrajhar Assam</option>
                <option value={3}>
                  Kokrajhar Govt. College, Kokrajhar Assam
                </option>
                <option value="Science College, Kokrajhar Assam">Science College, Kokrajhar Assam</option>
              </select>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-900">Program/Module</label>
              <select
                value={module}
                required
                onChange={(e) => setmodule(e.target.value)}
                className="p-2 text-xs rounded-md border pr-2 text-gray-600"
              >
                <option value="" disabled >
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
                value={semester}
                required
                onChange={(e) => setsemester(e.target.value)}
                className="p-2 text-xs rounded-md border text-gray-600"
              >
                <option value="" disabled >
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
                value={dept}
                required
                onChange={(e) => setdept(e.target.value)}
                className="p-2 text-xs rounded-md border text-gray-600"
              >
                <option value="" disabled >
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
                value={linkdin}
                required
                onChange={(e) => setlinkdin(e.target.value)}
                className="p-2 text-xs rounded-md border"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-900">Phone number</label>
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Enter phone number"
                autoComplete="tel"
                value={phone}
                required
                onChange={(e) => setphone(e.target.value)}
                className="p-2 text-xs rounded-md border"
              />
            </div>
            <button
        type="submit"
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
