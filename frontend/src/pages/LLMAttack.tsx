import React, { useState } from 'react';
import axios from 'axios';
import './LLMAttack.css';

interface ChatMessage {
  text: string;
  isUser: boolean;
}

interface ChatResponse {
  response: string;
}

const LLMAttack: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    // Add user message to chat
    const userMessage: ChatMessage = {
      text: inputMessage,
      isUser: true
    };
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const response = await axios.post<ChatResponse>('http://localhost:8000/api/agent', {
        prompt: inputMessage
      });

      // Add LLM response to chat
      const llmMessage: ChatMessage = {
        text: response.data.response,
        isUser: false
      };
      setMessages(prev => [...prev, llmMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage: ChatMessage = {
        text: 'Error: Failed to get response from LLM',
        isUser: false
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="llm-attack">
      <h1>LLM Attack Interface</h1>
      <div className="chat-container">
        <div className="chat-messages">
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.isUser ? 'user' : 'llm'}`}>
              {message.text}
            </div>
          ))}
          {isLoading && <div className="message llm loading">Thinking...</div>}
        </div>
        <form onSubmit={handleSubmit} className="chat-input-form">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Type your message..."
            className="chat-input"
          />
          <button type="submit" className="send-button">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default LLMAttack; 