import { useState, useEffect } from 'react';

function LoginScreen({ onLogin }) {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatDate = () => {
    const months = ['jan', 'fév', 'mar', 'avr', 'mai', 'juin', 'juil', 'aoû', 'sep', 'oct', 'nov', 'déc'];
    return `${months[currentTime.getMonth()]} ${currentTime.getDate()}`;
  };

  const getHours = () => {
    return currentTime.getHours().toString().padStart(2, '0');
  };

  const getMinutes = () => {
    return currentTime.getMinutes().toString().padStart(2, '0');
  };

  const getSeconds = () => {
    return currentTime.getSeconds().toString().padStart(2, '0');
  };

  return (
    <div className="fixed inset-0 bg-[url('/src/assets/nuageguy2.jpg')] bg-center bg-cover flex items-center justify-center">
      <div 
        className="w-48 h-48 p-6 rounded-3xl bg-sky-200/30 backdrop-blur-md shadow-lg text-center text-white flex flex-col justify-center cursor-pointer hover:bg-sky-200/40 hover:scale-105 transition-all duration-300"
        onClick={onLogin}
      >
        <p className="text-sm opacity-90 mb-4">{formatDate()}</p>
        <h2 className="text-6xl font-bold mb-2">{getHours()}</h2>
        <p className="text-2xl font-light">{getMinutes()} <span className="text-lg">{getSeconds()}</span></p>
      </div>
    </div>
  );
}

export default LoginScreen;