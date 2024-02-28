

export default async function Test(props: { params: { id: string } }) {
console.log(props.params.id);

  return (
    <div className="min-h-dvh text-black flex justify-center items-cetner">
<div className="text-4xl font-bold">{props.params.id}</div>

     </div>
  );


}
