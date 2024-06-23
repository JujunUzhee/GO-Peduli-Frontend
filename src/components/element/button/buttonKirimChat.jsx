import React from 'react';

const ButtonKirimChat = ({ sendMessage }) => {
  return (
    <button onClick={sendMessage} className="ml-2 bg-Green text-white p-2 rounded-full hover:bg-green-600 focus:outline-none">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
    </button>
  );
};

export default ButtonKirimChat;
