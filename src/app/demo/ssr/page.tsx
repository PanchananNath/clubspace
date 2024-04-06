import Skeleton from "@/components/skeleton";
import SpinnerMy from "@/components/spinner";

interface DemoData {
  [x: string]: any;
  id: number;
  name: string;
  amount: number;
  email: string;
}

export default async function Demo() {
  const demodata: DemoData = await fetch(
    "http://localhost:3000/api/getdemodata"
  )
    .then((res) => res.json()) // Assuming the response is JSON
    .then((data) => {
        console.log(data)
      // Assuming the response matches the shape of DemoData
      return data;
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      // Handle error
    });

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
        {demodata &&
          demodata.map((item: DemoData) => {
            return (
              <div key={item.id} className="flex space-x-5">
                <div>{item.id}</div>
                <div>{item.name}</div>
                <div>{item.amount}</div>
                <div>{item.email}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
