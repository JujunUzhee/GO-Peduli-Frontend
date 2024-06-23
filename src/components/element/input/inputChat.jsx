import React from 'react';

const InputChat = ({ value, onChange, onSendMessage }) => {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onSendMessage();
    }
  };

  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      onKeyPress={handleKeyPress}
      placeholder="Type your message"
      className="w-full px-4 py-2 text-gray-700 rounded-full focus:outline-none bg-white"
    />
  );
};

export default InputChat;
