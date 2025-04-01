import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface ApiResponse {
  message: string;
}

const Home: React.FC = () => {
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const response = await axios.get<ApiResponse>('http://localhost:8000/api/hello');
        setMessage(response.data.message);
      } catch (error) {
        console.error('Error fetching message:', error);
        setMessage('Error connecting to backend');
      }
    };

    fetchMessage();
  }, []);

  return (
    <div className="home">
      <h1>Welcome to Our App</h1>
      <p>{message}</p>
    </div>
  );
};

export default Home; 