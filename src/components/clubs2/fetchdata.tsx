import React from "react";

export interface CardProps {
  id: number;
  name: string;
  description: string;
  logo : string;
}
const CustomCard: React.FC<CardProps> = ({id, name, description, logo}) => {
  return (
    <div className="bg-white shadow-md sm:p-5 p-1 sm:m-2 m-1 text-black  self-stretch flex flex-col items-start justify-start text-center">


        <div>Id: {id}</div>
        <div>Name: {name}</div>
        <div>Description: {description}</div>
        <div>Logo: {logo}</div>
    </div>
  );
};

export default CustomCard;