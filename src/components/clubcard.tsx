import React from "react";

export interface CardProps {
    title: string;
    description: string;
    icon: string;
}





const CustomCard: React.FC<CardProps> = ({ title,description ,icon }) => {
  return (
    <div className="bg-white shadow-md sm:p-5 p-1 sm:m-2 m-1   self-stretch flex flex-col items-start justify-start text-center">
        <div>
            Name: {title}
        </div>
        <div>
            About: {description}
        </div>
    </div>
  );
};

export default CustomCard;