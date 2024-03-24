import React, { useState, useEffect } from 'react';

function ChatButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasNewMessage, setHasNewMessage] = useState(true); // Supposons qu'il y a une nouvelle notification au début

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (hasNewMessage) setHasNewMessage(false); // Réinitialiser le compteur de notification à l'ouverture
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isOpen) {
        setHasNewMessage(true); // Simuler l'arrivée d'un nouveau message
      }
    }, 60000); // Mise à jour pour toutes les 1 minute

    return () => clearInterval(timer);
  }, [isOpen]);

  return (
    <div style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: '1000' }}>
      {isOpen && (
        <div style={{ position: 'absolute', bottom: '60px', right: '0', backgroundColor: '#fff', border: '1px solid #ccc', padding: '20px', borderRadius: '10px', width: '300px', height: '400px' }}>
          <p>Parlez à notre conseiller œnologue!</p>
          {/* Ici, ajoutez votre logique de chat ou un composant de chat intégré */}
        </div>
      )}
      <button onClick={toggleChat} style={{
        padding: '10px',
        borderRadius: '50%',
        backgroundColor: '#000', // Couleur noir
        color: '#fff',
        border: 'none',
        cursor: 'pointer',
        animation: hasNewMessage ? 'blink 1s linear infinite' : 'none',
        position: 'relative',
      }}>
        Chat
        {hasNewMessage && <span style={{ position: 'absolute', top: '-5px', right: '-5px', backgroundColor: 'red', color: 'white', borderRadius: '50%', padding: '0 5px', fontSize: '12px' }}>1</span>}
      </button>
      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </div>
  );
}

export default ChatButton;