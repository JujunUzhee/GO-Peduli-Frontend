import React, { useState } from 'react'
import { FaKeyboard } from 'react-icons/fa6';
import { IoSend } from 'react-icons/io5';

const ChatComponent = () => {
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      // Handle sending message logic here
      setInput('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 flex justify-center items-center w-full">
      <div className="max-w-3xl w-full bg-white rounded-lg shadow-lg">
        <div className="bg-gray-500 p-4 rounded-t-lg">
          <h1 className="text-lg font-bold text-center text-white">Pesan</h1>
        </div>
        <div className="p-4 h-96 overflow-y-auto">
          {/* Messages will be displayed here */}
        </div>
        <div className="p-4 border-t">
          <div className="flex items-center">
            <button className="p-2 bg-gray-200 rounded-full mr-2 text-2xl">
              <FaKeyboard />
            </button>
            <input
              type="text"
              className="flex-grow p-2 border-Green rounded-lg bg-loginLight "
              placeholder="Text Here"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={handleSend} className="p-2 text-2xl text-dark  ml-2">
              <IoSend />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatComponent