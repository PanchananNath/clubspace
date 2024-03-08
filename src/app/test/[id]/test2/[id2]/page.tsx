export default function Test2(props: { params: { id: string; id2: string } }) {
  return (
    <div className=" flex justify-center items-center w-screen bg-blue-500">
      <div className="text-4xl font-bold">
        {props.params.id} - {props.params.id2}
      </div>
    </div>
  );
}
