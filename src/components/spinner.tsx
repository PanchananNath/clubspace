import React from "react";

export default function Spinner() {
  return (
    <div className="flex flex-col justify-center items-center h-full w-full bg-white bg-opacity-50">
      <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-primary"></div>
      <span className="mt-4 text-lg font-semibold text-primary">
        Please Wait
      </span>
    </div>
  );
}
