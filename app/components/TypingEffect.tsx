'use client'
import React, { useState, useEffect } from 'react';
import styles from './TypingEffect.module.css';

const messages = [
  'Hello there!',
  'Well this is slightly awkward. It looks like this website is currently being redeveloped',
  'So here is a few of my other projects that you can look at until my new portfolio is ready',
];

interface TypingEffectProps {
  onTypingComplete: () => void;
}

const TypingEffect: React.FC<TypingEffectProps> = ({ onTypingComplete }) => {
  const [currentMessage, setCurrentMessage] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedMessages, setDisplayedMessages] = useState<string[]>([]);
  const [isNewMessage, setIsNewMessage] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < messages.length) {
        const message = messages[currentIndex];
        setCurrentMessage((prevMessage) => prevMessage + message.charAt(prevMessage.length));
        setIsNewMessage(true);
      } else {
        clearInterval(interval);
        onTypingComplete(); // Notify parent component when typing is complete
      }
    }, 25);

    return () => clearInterval(interval);
  }, [currentIndex, onTypingComplete]);

  useEffect(() => {
    if (currentMessage === messages[currentIndex]) {
      setDisplayedMessages((prevMessages) => [...prevMessages, currentMessage]);
      setCurrentMessage('');
      setCurrentIndex((prevIndex) => prevIndex + 1);
      setIsNewMessage(false);
    }
  }, [currentMessage, currentIndex]);

  return (
    <div className={styles.typingEffect}>
      <div className={styles.messageContainer}>
        {displayedMessages.map((message, index) => (
          <div key={index} className={styles.message}>{message}</div>
        ))}
        {currentMessage && (
          <div className={isNewMessage ? `${styles.message} ${styles.newMessage}` : styles.message}>
            {currentMessage}
          </div>
        )}
      </div>
    </div>
  );
};

export default TypingEffect;
