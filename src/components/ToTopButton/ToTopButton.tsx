import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { ChevronUp } from 'react-bootstrap-icons';
import './ToTopButton.scss';

const ToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    console.log('Scroll Top:', scrollTop);
    setIsVisible(scrollTop > 1000);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Button
      variant="primary"
      className={`to-top-button ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
    >
      <ChevronUp size={50} />
    </Button>
  );
};

export default ToTopButton;