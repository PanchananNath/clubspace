import React from "react";

interface AlertProps {
  message: string;
  onClose: () => void;
}

const Alert: React.FC<AlertProps> = ({ message, onClose }) => {
  return (
    <div className="fixed top-0 bg-black bg-opacity-20 h-full w-full z-50 flex justify-end items-end">
      <div className="bg-white rounded-lg p-6 max-w-sm shadow-lg">
        <p className="text-lg font-semibold mb-4">{message}</p>
        <button
          onClick={onClose}
          className="bg-primary hover:bg-blue-500 text-white font-bold py-2 px-4 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Alert;
