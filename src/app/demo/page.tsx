"use client";
import { useEffect, useState } from "react";

//describe the object with the properties and types of the data
interface DemoData {
  id: number;
  name: string;
  amount: number;
  email: string;
}

export default function Demo() {
  const [demodata, setDemodata] = useState<DemoData[]>([]);

  // ****NOT OPTIMAL*********
  // const [id, setId] = useState<number>(0);
  // const [name, setName] = useState<string>("");
  // const [amount, setAmount] = useState<number>(0);
  // const [email, setEmail] = useState("");
  // //it is a function that will be called when the user clicks the save button
  // const handlesubmit = async () => {
  //   console.log(id, name, amount, email);
  //   // try{
  //   await fetch(
  //     `/api/adddemodata?id=${id}&name=${name}&amount=${amount}&email=${email}`
  //   )
  //     .then(
  //       //anonymous function that will be called when the fetch is done
  //       (res) => {
  //         if (res.ok) {
  //           window.alert("Data saved successfully");
  //         }
  //       }
  //     )
  //     .catch((err) => {
  //       console.log(err);
  //     });
  //   // }
  // };

  //create a new object and set its initial values
  const [formData, setFormData] = useState<DemoData>({
    id: 0,
    name: "",
    amount: 0,
    email: "",
  });

  const handlesubmit = async () => {
    console.log(formData);
    await fetch(
      `/api/adddemodata?id=${formData.id}&name=${formData.name}&amount=${formData.amount}&email=${formData.email}`
    )
      .then(
        //anonymous function that will be called when the fetch is done
        (res) => {
          if (res.ok) {
            window.alert("Data saved successfully");
          }
        }
      )
      .catch((err) => {
        console.log(err);
      });
  };

  const handleTextInput = (e: { target: { name: string; value: string } }) => {
    //setFormData is called with a function as its argument. This function receives the previous state prev as its parameter. It returns a new object with the same properties as the previous state, but with the value of the property that matches the name of the input element that triggered the event changed to the value of the input element.
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  //useEffect is a hook that is called when the component is mounted. It is used to fetch data from the server.
  useEffect(() => {
    async function fetchDemoData() {
      await fetch("http://localhost:3000/api/getdemodata")
        .then((res) => res.json()) // Assuming the response is JSON
        .then((data: DemoData[]) => {
          // Assuming the response matches the shape of DemoData
          return setDemodata(data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          // Handle error
        });
    }
    fetchDemoData();
  }, []);

  //loads data into the form when the edit button is clicked
  const handleEdit = (id: number) => {
    const itemToEdit = demodata.find((item) => item.id === id);
    //null check
    if (itemToEdit) {
      setFormData(itemToEdit);
    } else {
      window.alert("Item not found");
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex  flex-col justify-center items-center text-black text-3xl w-full">
      <div className="text-3xl text-black">Hello World!!</div>
      <div className="space-y-5">
        <div className="flex space-x-5">
          <div>Id</div>
          <div>Name</div>
          <div>Amount</div>
          <div>Email</div>
        </div>
        {demodata &&
          demodata.map((item) => {
            return (
              <div key={item.id} className="flex space-x-5">
                <div>{item.id}</div>
                <div>{item.name}</div>
                <div>{item.amount}</div>
                <div>{item.email}</div>
                <button
                  onClick={() => {
                    handleEdit(item.id);
                  }}
                  className="bg-blue-400 text-white rounded-lg px-5"
                >
                  EDIT
                </button>
              </div>
            );
          })}
        <div className="bg-red-200 px-5 py-10 m-5 space-y-5">
          <div className="flex">
            <div className="w-44">ID</div>
            <input
              value={formData.id}
              onChange={handleTextInput}
              name="id" //attribute name in database
              className="bg-slate-100 rounded-lg ml-5"
              type="number"
            />
          </div>
          <div className="flex">
            <div className="w-44">Name</div>
            <input
              value={formData.name}
              onChange={handleTextInput}
              name="name"
              className="bg-slate-100 rounded-lg ml-5"
              type="text"
            />
          </div>
          <div className="flex">
            <div className="w-44">Amount</div>
            <input
              value={formData.amount}
              onChange={handleTextInput}
              name="amount"
              className="bg-slate-100 rounded-lg ml-5"
              type="number"
            />
          </div>
          <div className="flex">
            <div className="w-44">Email</div>
            <input
              value={formData.email}
              onChange={handleTextInput}
              name="email"
              className="bg-slate-100 rounded-lg ml-5"
              type="email"
            />
          </div>
          <button
            onClick={handlesubmit}
            className="bg-blue-500 text-white px-7 py-2 rounded-xl"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
