import React from "react";

export interface CardProps {
  id: number;
  name: string;
  about: string;
  vision: string;
  objective: string;
  poster: string;
}
const CustomCard: React.FC<CardProps> = ({id, name, about, vision, objective, poster}) => {
  return (
    <div className="bg-white shadow-md sm:p-5 p-1 sm:m-2 m-1 text-black  self-stretch flex flex-col items-start justify-start text-center">


        <div>Id: {id}</div>
        <div>Name: {name}</div>
        <div>about: {about}</div>
        <div>Vision: {vision}</div>
        <div>Objective: {objective}</div>
        <div>Poster: {poster}</div>
    </div>
  );
};

export default CustomCard;