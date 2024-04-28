"use client";

import Skeleton from "@/components/skeleton";
import SpinnerMy from "@/components/spinner";
import { useEffect, useState } from "react";

interface DemoData {
  id: number;
  name: string;
  amount: number;
  email: string;
}

export default function Demo() {

  // calcualtion and operations
  const [demoData, setDemoData] = useState<DemoData[]>([]);

  const [formdata, SetFormdata] = useState<DemoData>({

    id: 0,
    name: "",
    amount: 0,
    email: "",
  });

  const [refresh, setRefresh] = useState<number>(0);

  const [loading, setLoading] = useState<boolean>(false);

  const [dataloading, setDataLoading] = useState<boolean>(true);


  useEffect(() => {
    async function fetchDemoData() {
      await fetch("http://localhost:3000/api/getdemodata")
        .then((res) => res.json()) // Assuming the response is JSON
        .then((data: DemoData[]) => {

           
          // Assuming the response matches the shape of DemoData
          return setDemoData(data);


        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          // Handle error
        });

        setDataLoading(false);
    }
    fetchDemoData();
  }, [refresh]); //when refresh changes this function executes

  const handleTextInputChnage = (e: { target: { name: any; value: any } }) => {
    SetFormdata((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  function handleEdit(id: number) {
    const itemToEdit = demoData.find((item) => item.id === id);
    if (itemToEdit) {
      SetFormdata(itemToEdit);
    } else {
      console.error(`Item with ID ${id} not found`);
    }
  }

  const handleSubmit = async () => {
    setLoading(true);
    console.log(formdata);
    try {
      await fetch(
        `/api/adddemodata?id=${formdata.id}&name=${formdata.name}&amount=${formdata.amount}&email=${formdata.email}`
      )
        .then((res) => {
          if (res.ok) {
            setRefresh(refresh + 1);
            setLoading(false);
            window.alert("Success");
          }
        })
        .catch((e) => window.alert(e));
    } catch (e) {
      setLoading(false);
      window.alert("Failure");
    }
  };
  const handleEditSubmit = async () => {
    setLoading(true);
    console.log(formdata);
    try {
      await fetch(
        `/api/editdemodata?id=${formdata.id}&name=${formdata.name}&amount=${formdata.amount}&email=${formdata.email}`
      )
        .then((res) => {
          if (res.ok) {
            setRefresh(refresh + 1);
            setLoading(false);
            window.alert("Success");
          }
        })
        .catch((e) => window.alert(e));
    } catch (e) {
      setLoading(false);
      window.alert("Failure");

    }
  };

  return (

    <div className="min-h-screen bg-slate-100 flex  flex-col justify-center items-center text-black text-3xl">

      <div className="text-3xl text-black">Hello World!!</div>
      <div className="space-y-5">
        <div className="flex space-x-5">
          <div>Id</div>
          <div>Name</div>
          <div>Amount</div>
          <div>Email</div>
        </div>

        {dataloading && <div className="flex"><Skeleton/></div>}
        {demoData && demoData.map((item) => {
          return (
            <div key={item.id} className="flex space-x-5">
              <div>{item.id}</div>
              <div>{item.name}</div>
              <div>{item.amount}</div>
              <div>{item.email}</div>
              <button
                onClick={() => handleEdit(item.id)}
                className="bg-yellow-500 py-3 px-1 rounded"
              >
                edit
              </button>
            </div>
          );
        })}
      </div>

      <div className="bg-red-200 px-5 py-10 m-5 space-y-5">
        <div className="flex">
          <div className="w-44">ID</div>
          <input
            value={formdata.id}
            onChange={handleTextInputChnage}
            name="id"
            className="bg-slate-100 rounded-lg ml-5"
            type="number"
          />
        </div>
        <div className="flex">
          <div className="w-44">Name</div>
          <input
            value={formdata.name}
            onChange={handleTextInputChnage}
            name="name"
            className="bg-slate-100 rounded-lg ml-5"
            type="text"
          />
        </div>
        <div className="flex">
          <div className="w-44">Amount</div>
          <input
            value={formdata.amount}
            onChange={handleTextInputChnage}
            name="amount"
            className="bg-slate-100 rounded-lg ml-5"
            type="number"
          />
        </div>
        <div className="flex">
          <div className="w-44">Email</div>
          <input
            value={formdata.email}
            onChange={handleTextInputChnage}
            name="email"
            className="bg-slate-100 rounded-lg ml-5"
            type="email"
          />
        </div>
        <div className="flex justify-between">
          {loading ? (
            <SpinnerMy />
          ) : (
            <button
              onClick={handleSubmit}
              className="bg-blue-500 font-bold px-3 py-2 flex justify-center items-center rounded-xl text-white text-base"
            >
              <div>Save</div>
            </button>
          )}
          {loading ? (
            <SpinnerMy />
          ) : (
            <button
              onClick={handleEditSubmit}
              className="bg-blue-500 font-bold px-3 py-2 flex justify-center items-center rounded-xl text-white text-base"
            >
              <div>Edit</div>
            </button>
          )}

        </div>
      </div>
    </div>
  );
}
