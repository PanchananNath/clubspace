import React, { ReactNode } from "react";
import { IconType } from "react-icons";

interface DropdownItemProps {
    text: string;
    isOpen: boolean;
    onClick: () => void;
    icon: JSX.Element;
    children: React.ReactNode;
  }

  const DropdownItem: React.FC<DropdownItemProps> = ({text, isOpen, onClick, icon , children}) => {
    return (
        <div>
          <div
            onClick={onClick}
            className={`w-80 h-12 bg-opacity-85 flex justify-start px-6 items-center cursor-pointer ${
              isOpen ? "bg-[#80bed1] rounded-t-md" : "bg-[#B3DCE9] hover:bg-[#80bed1] rounded-md hover:opacity-100 transition-all duration-300 ease-in-out"
            }`}
          >
            {icon}
            <span className="ml-2  text-sm">{text}</span>
          </div>
          {isOpen && <div className="dropdown-content">{children}</div>}
        </div>
      );
      
};

export default DropdownItem;
