import React from 'react';

const FlashMessage = ({ message, type, onClose }) => {
  // Determine the background color based on the type of message
  const bgColor = type === 'success' ? 'bg-green-500' : 'bg-red-500';
  const borderColor = type === 'success' ? 'border-green-700' : 'border-red-700';

  if (!message) return null; // Return null if there's no message to display

  return (
    <div
      className={`${bgColor} ${borderColor} border-t-4 rounded-b text-white px-4 py-3 shadow-md mb-6 transition-opacity duration-500 ease-in-out`}
      role="alert"
    >
      <div className="flex">
        <div className="py-1">
          {type === 'success' ? (
            <svg
              className="fill-current h-6 w-6 text-white mr-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M10 15l-3.5-3.5 1.5-1.5L10 12l6-6 1.5 1.5L10 15z" />
            </svg>
          ) : (
            <svg
              className="fill-current h-6 w-6 text-white mr-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M10 15l-3.5-3.5 1.5-1.5L10 12l6-6 1.5 1.5L10 15z" />
            </svg>
          )}
        </div>
        <div>
          <p className="font-bold">{type === 'success' ? 'Success!' : 'Error!'}</p>
          <p className="text-sm">{message}</p>
        </div>
      </div>
      <button
        onClick={onClose}
        className="absolute top-0 right-0 mt-2 mr-4 text-xl text-white leading-none"
      >
        &times;
      </button>
    </div>
  );
};

export default FlashMessage;
