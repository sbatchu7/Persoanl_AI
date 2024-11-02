
import React, { useState } from 'react';
import axios from 'axios';

function Chat() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  const sendMessage = async () => {
    const response = await axios.post('http://localhost:5000/chat', { message: input });
    setMessages([...messages, { sender: 'user', text: input }, { sender: 'assistant', text: response.data.response }]);
    setInput('');
  };

  return (
    <div>
      <h2>Personal AI Assistant Chat</h2>
      <div>
        {messages.map((msg, idx) => (
          <p key={idx}><strong>{msg.sender}:</strong> {msg.text}</p>
        ))}
      </div>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default Chat;
