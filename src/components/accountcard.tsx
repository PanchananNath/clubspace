import React from "react";

export interface CardProps {
  username: string;
  email: string;
  icon: string;
}

const CustomCard: React.FC<CardProps> = ({ username, email, icon }) => {
  return (
    <div className="bg-white shadow-md sm:p-5 p-1 sm:m-2 m-1   self-stretch flex flex-col items-start justify-start text-center">
      <div>Name: {username}</div>
      <div>Email: {email}</div>
    </div>
  );
};

export default CustomCard;
