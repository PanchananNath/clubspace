import React from "react";

export interface CardProps {
  eventid: BigInteger;
  name: string;
  venue: string;
  date_time :string;
}

const CustomCard: React.FC<CardProps> = ({ eventid,name,venue,date_time }) => {
  return (
    <div className="bg-white shadow-md sm:p-5 p-1 sm:m-2 m-1   self-stretch flex flex-col items-start justify-start text-center">
      <div>Name: {venue}</div>
      <div>Number: {eventid}</div>
      <div>Name: {name}</div>
    </div>
  );
};

export default CustomCard;