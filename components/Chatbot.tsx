import React, { useState } from 'react';

const Chatbot = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleSendMessage = () => {
    setMessages([...messages, input]);
    setInput('');

    setTimeout(() => {
      if (input.toLowerCase().includes('hello')) {
        setMessages([...messages, 'Hello, how can I help you?']);
      } else if (input.toLowerCase().includes('how are you')) {
        setMessages([...messages, 'I am fine, thank you. How can I assist you today?']);
      } else {
        setMessages([...messages, 'Sorry, I did not understand that.']);
      }
    }, 1000);
  };

  return (
    <div className="p-4 border rounded shadow-md">
      <div className="mb-4">
        {messages.map((message, index) => (
          <p key={index}>{message}</p>
        ))}
      </div>
      <div>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          className="border rounded p-2 mr-2"
        />
        <button onClick={handleSendMessage} className="bg-blue-500 text-white rounded p-2">
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;