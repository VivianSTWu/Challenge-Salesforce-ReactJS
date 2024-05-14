import React, { useState } from 'react';
import './FloatingButton.css'; // Estilo para o botão flutuante

interface FloatingButtonProps {
  onClick: () => void; // Função de clique do botão
  title: string; // Título do botão
}

const FloatingButton: React.FC<FloatingButtonProps> = ({ onClick, title }) => {
  const [showTitle, setShowTitle] = useState(false);

  return (
    <div
      className="floating-button"
      onClick={onClick}
      onMouseEnter={() => setShowTitle(true)}
      onMouseLeave={() => setShowTitle(false)}
    >
      <span className="button-icon">OD</span>
      {showTitle && <span className="button-title">{title}</span>}
    </div>
  );
};

export default FloatingButton;
