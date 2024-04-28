// Route handler
// export async function GET() {
//   return new Response("Hello World");
// }

import { data } from "./data";

export async function GET() {
  return Response.json(data);
}

export async function POST(request: Request) {
  console.log(request); // This will log the entire request object
  console.log(await request.json()); // This will log the parsed JSON body of the request

  const update_data = await request.json(); //data from request body
  const newData = {
    id: data.length + 1,
    name: update_data.name,
  };
  data.push(newData);
  return new Response(JSON.stringify(newData), {
    headers: { "Content-Type": "application/json" },
    status: 201,
  });
}
