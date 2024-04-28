import React from "react";

export interface CardProps {
  title: string;
  description: string;
  icon: string;
}

const CustomCard: React.FC<CardProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-white shadow-md sm:p-5 p-5 h-full sm:m-2 m-1   self-stretch flex flex-col items-start justify-start text-center rounded-xl">
      <div className="text-3xl underline font-bold text-center w-full"> {title}</div>
      <div className="text-lg text-slate-600 text-justify">{description}</div>
    </div>
  );
};

export default CustomCard;
