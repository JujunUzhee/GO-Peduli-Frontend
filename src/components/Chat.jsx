import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import profileImage from '/image/about.png';
import InputChat from './element/input/inputChat';
import ButtonKirimChat from './element/button/buttonKirimChat';

const ChatBox = ({ onClose }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [donationResponseIndex, setDonationResponseIndex] = useState(0);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.chat-box') && !event.target.closest('.chat-button')) {
        onClose();
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [onClose]);

  const handleUserMessage = (message) => {
    const userMessage = { role: 'user', content: message };
    if (messages.length === 0) {
      const greetingMessage = { role: 'assistant', content: "Halo! Selamat datang di layanan Chat kami. Ada yang bisa saya bantu?" };
      setMessages([userMessage, greetingMessage]);
    } else {
      const botMessage = processUserMessage(message);
      setMessages([...messages, userMessage, botMessage]);
    }
  };

  const processUserMessage = (message) => {
    const lowerCaseMessage = message.toLowerCase();

    if (lowerCaseMessage.includes('hallo') || lowerCaseMessage.includes('hello')) {
      return { role: 'assistant', content: "Halo juga! Ada yang bisa saya bantu?" };
    } else if (lowerCaseMessage.includes('donasi') || lowerCaseMessage.includes('berdonasi')) {
      return getDonationResponse();
    } else {
      return { 
        role: 'assistant', 
        content: (
          <span>
            Maaf, saya tidak mengerti. Bisa tolong dijelaskan lebih lanjut? Atau kunjungi 
            <Link to="/faq" className="text-blue-500 underline"> halaman FAQ</Link>.
          </span>
        )
      };
    }
  };

  const getDonationResponse = () => {
    const donationResponses = [
      "Untuk berdonasi, silakan kunjungi halaman donasiku kemudian klik button donasi sekarang 😇",
      "Anda bisa melakukan donasi dengan mengisi formulir yang ada setelah klik button donasi sekarang 🤗.",
      "Kami menerima donasi dalam bentuk pakaian bekas saja. Detail lebih lanjut ada di Faq.",
      "Untuk informasi lebih lanjut tentang donasi, kunjungi Sosial Media Kami Go-Peduli.",
      "Setiap donasi yang Anda berikan sangat berarti bagi kami 🤗",
      "Terima kasih atas niat baik Anda untuk berdonasi.",
      "Kami menyediakan berbagai cara untuk berdonasi.",
      "Kami sangat menghargai dukungan Anda. Donasi bisa dilakukan melalui www.Go-Peduli.com/donasiku.",
      "Terima kasih atas dukungan Anda!"
    ];

    const response = donationResponses[donationResponseIndex];
    setDonationResponseIndex((prevIndex) => (prevIndex + 1) % donationResponses.length);
    return { role: 'assistant', content: response };
  };

  const sendMessage = () => {
    if (input.trim()) {
      handleUserMessage(input);
      setInput('');
    }
  };

  return (
    <div className="chat-box fixed bottom-16 right-5 w-80 bg-white rounded-lg shadow-lg z-30">
      <div className="flex items-center p-4 bg-Green rounded-t-lg">
        <img src={profileImage} alt="Profile" className="w-12 h-12 rounded-full mr-4" />
        <div>
          <h3 className="text-white font-bold">Jial Ahmad</h3>
          <p className="text-white text-sm">Customer Service</p>
        </div>
      </div>
      <div className="p-4 bg-gray-100 h-64 overflow-y-auto">
        {messages.map((msg, index) => (
          <div key={index} className={`chat ${msg.role === 'user' ? 'chat-end' : 'chat-start'}`}>
            <div className={`chat-bubble text-sm ${msg.role === 'user' ? 'bg-Green text-white' : 'bg-gray-300 text-black'}`}>
              {msg.content}
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center p-2 bg-white rounded-b-lg border-t">
        <InputChat value={input} onChange={(e) => setInput(e.target.value)} onSendMessage={sendMessage} />
        <ButtonKirimChat sendMessage={sendMessage} />
      </div>
    </div>
  );
};

export default ChatBox;
