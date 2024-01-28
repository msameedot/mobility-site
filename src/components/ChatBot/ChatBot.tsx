import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import './Chatbot.scss';
import chatBotImg from '../../assets/images/chatBot.png';

const Chatbot: React.FC = () => {
  const renderTooltip = (props: any) => (
    <Tooltip id="chatbot-tooltip" {...props}>
      Click to open chatbot
    </Tooltip>
  );

  const handleChatbotClick = () => {
  };

  return (
    <OverlayTrigger
      placement="left"
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip}
    >
      <div className="chatbot-icon" onClick={handleChatbotClick}>
        <img src= {chatBotImg} alt="Chatbot Icon" />
        
      </div>
    </OverlayTrigger>
  );
};

export default Chatbot;