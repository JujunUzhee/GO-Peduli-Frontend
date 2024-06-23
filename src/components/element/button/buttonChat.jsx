import React, { useState, useEffect } from 'react';
import { IoChatbubbleEllipsesOutline } from 'react-icons/io5';
import ChatBox from '../../Chat';

const ButtonChatus = () => {
  const [isChatBoxOpen, setIsChatBoxOpen] = useState(false);

  const toggleChatBox = () => {
    setIsChatBoxOpen(prevState => !prevState);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isChatBoxOpen && !event.target.closest('.chat-box') && !event.target.closest('.chat-button')) {
        setIsChatBoxOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isChatBoxOpen]);

  return (
    <>
      <div
        className="chat-button flex items-center p-2.5 mb-5 bg-green-50 rounded-3xl shadow-md cursor-pointer fixed bottom-5 right-5 transition duration-300 ease-in-out z-20"
        onMouseEnter={(e) => e.currentTarget.classList.replace('bg-green-50', 'bg-green-100')}
        onMouseLeave={(e) => e.currentTarget.classList.replace('bg-green-100', 'bg-green-50')}
        onClick={toggleChatBox}
      >
        <div className='text-3xl text-green-500 pr-2'>
          <IoChatbubbleEllipsesOutline />
        </div>
        <span className="font-semibold text-sm text-gray-800">
          Chat Us
        </span>
      </div>
      {isChatBoxOpen && <ChatBox onClose={() => setIsChatBoxOpen(false)} />}
    </>
  );
};

export default ButtonChatus;
