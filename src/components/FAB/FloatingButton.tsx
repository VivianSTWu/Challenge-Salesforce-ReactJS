import React, { useState } from 'react';
import './FloatingButton.style.css'; // Estilo para o botão flutuante
  
interface FloatingButtonProps {
  onClick: () => void; // Função de clique do botão
  title: string; // Título do botão
  icon: string | JSX.Element; // Ícone do botão (pode ser uma string ou um JSX.Element)
}

const FloatingButton: React.FC<FloatingButtonProps> = ({ onClick, title, icon }) => {
  const [showTitle, setShowTitle] = useState(false);

  return (
    <div
      className="floating-button"
      onClick={onClick}
      onMouseEnter={() => setShowTitle(true)}
      onMouseLeave={() => setShowTitle(false)}
    >
      <span className="button-icon">{icon}</span>
      {showTitle && <span className="button-title">{title}</span>}
    </div>
  );
};

export default FloatingButton;
