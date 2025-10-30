import { useState, useEffect } from 'react';

const App = () => {
  const [balance, setBalance] = useState(500);

  useEffect(() => {
    const saved = localStorage.getItem('dice_balance');
    if (saved) {
      setBalance(Number(saved));
    } else {
      localStorage.setItem('dice_balance', '500');
    }
  }, []);

  const roll = () => {
    const result = Math.floor(Math.random() * 6) + 1;
    console.log('Dice:', result);
    if (window.navigator.vibrate) window.navigator.vibrate(100);
  };

  return (
    <div style={{ padding: 20, textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h2>🎲 Dice Duel</h2>
      <p style={{ fontSize: '20px', fontWeight: 'bold', color: '#eab308' }}>
        💰 Баланс: {balance} монет
      </p>
      <button
        onClick={roll}
        style={{
          padding: '15px 30px',
          fontSize: '20px',
          margin: '20px',
          border: 'none',
          background: '#3b82f6',
          color: 'white',
          borderRadius: '10px',
          cursor: 'pointer',
        }}
      >
        Бросить кубик
      </button>
    </div>
  );
};

export default App;
