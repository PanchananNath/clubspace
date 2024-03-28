import React from "react";

export interface CardProps {
    id : string;
    name : string;
    logo : string;
    website_url : string;
    catagory : string;
    advisor : string;
    convener : string;
    description : string;
    contact_info : string;
    social_media_links : string;
}
const CustomCard: React.FC<CardProps> = ({ id, name, logo, website_url, catagory, advisor, convener, description, contact_info, social_media_links }) => {
  return (
    
    <div className="bg-white shadow-md sm:p-5 p-1 sm:m-2 m-1 text-black  self-stretch flex flex-col items-start justify-start text-center">


      <div>Id : {id}</div>
      <div>Name : {name}</div>
      <div>Logo : {logo}</div>
      <div>Website_url : {website_url}</div>
      <div>Catagory : {catagory}</div>
      <div>Advisor : {advisor}</div>
      <div>onvener: {convener}</div>
      <div>Description : {description}</div>
      <div>Contact_info : {contact_info}</div>
      <div>Social_media_links : {social_media_links}</div>
      
    </div>
  );
};

export default CustomCard;