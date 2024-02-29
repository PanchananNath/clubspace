import React from "react";

export interface CardProps {
  eventid: string;
  name: string;
  venue: string;
  date_time :timestamp;
}

const CustomCard: React.FC<CardProps> = ({ eventid,name,venue,date_time }) => {
  return (
    <div className="bg-white shadow-md sm:p-5 p-1 sm:m-2 m-1 text-black  self-stretch flex flex-col items-start justify-start text-center">
      <div>Event Id: {eventid}</div>
      <div>Name: {name}</div>
      <div>Venue: {venue}</div>
      {/* <div>Time: {date_time}<div/> */}
    </div>
  );
};

export default CustomCard;