// import React from "react";

// export interface CardProps {
//   eventid: string;
//   name: string;
//   venue: string;
//   date_time: string; 
// }

// const CustomCard: React.FC<CardProps> = ({eventid, name, venue, date_time}) => {
//   const formattedDateTime = new Date(date_time).toLocaleString(); 

//   return (
//     <>
//     <div className="bg-white shadow-md sm:p-5 p-1 sm:m-3 m-1 text-black self-stretch flex flex-col items-start justify-start text-center">
//       <small className="text-sm ml-2"></small>

//       <div>Event Id: {eventid}</div>
//       <div>Name: {name}</div>
//       <div>Venue: {venue}</div>
//       {/* Display formatted date and time */}
//       <div>Date_time: {date_time}</div>
//     </div>
//     console.log(datetime);
//     </>
//   );
// };

// export default CustomCard;

import React from "react";

export interface CardProps {
  eventid: string;
  name: string;
  venue: string;
  date_time: string; 
}

const CustomCard: React.FC<CardProps> = ({eventid, name, venue, date_time}) => {
  const formattedDateTime = new Date(date_time).toLocaleString(); 
  const currentDateTime = new Date().toLocaleString();

  return (
    <>
    {/* <div className="bg-white shadow-md sm:p-5 p-1 sm:m-3 m-1 text-black self-stretch flex flex-col items-start justify-start text-center"> */}
    <div className="p-1 bg-[#365486] px-4 rounded-md text-white">
      {/* <small className="text-sm ml-2"></small> */}

      <div>Event Id: {eventid}</div>
      <div>Name: {name}</div>
      <div>Venue: {venue}</div>
      {/* Display formatted date and time */}
      <div>Date_time: {date_time}</div>
     
    </div>
    </>
  );
};

export default CustomCard;
