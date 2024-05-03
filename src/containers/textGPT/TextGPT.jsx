import React, { useState } from 'react';
import './textGPT.css'

function TextGPT() {

  const [input, setInput] = useState('');
  const [chatLog, setChatLog] = useState([{
    user: 'gpt',
    message: "How can I help you today?",
  }]);

  async function handleSubmit(e){
    e.preventDefault();
    let chatLogNew = [...chatLog, {user: "me", message: `${input}`},
  ]
    setInput('');
    setChatLog(chatLogNew);
    const messages = chatLogNew.map((message) => message.message).join("\n");
    const response = await  fetch('http://localhost:3080/', {
     method: "POST",
     headers: {
      "Content-Type": "application/json"
     },
     body: JSON.stringify({
      message: messages
     })
    });
    const data = await response.json();
    console.log(data.message)
    setChatLog([...chatLogNew, {user: "gpt", message: `${data.message}`}]);
  }

  return (
    <>
    
  <div className='gpt3__textgpt section__padding' id='chat'>
    <h1 className='gradient__text'>And More...</h1>
    <form onSubmit={handleSubmit}>
      <input rows="1" placeholder="Ask codex..." value={input} onChange={ (e) => setInput(e.target.value)} />
      <button type="submit">Generate</button>
    </form>
    
    <div className='gpt3__textgpt-chatbox_chatlog'>
      {chatLog.map((message, index) => (
      <ChatMessage key={index} message={message} />
      ))}
    </div>
  </div>
    </>
  );
}

const ChatMessage = ({message}) => {
  return (
    <div className='gpt3__textgpt-message'>
      <div className='gpt3__textgpt-message_center'>
        <div className='message'>
          {message.user}: {message.message}
        </div>
      </div>
    </div>
  )
}

export default TextGPT;


    
