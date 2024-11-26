import React, { useState, useEffect } from 'react';
import styles from './styles.module.css'; 

interface WarningProps {
  message: string;
  duration?: number; 
}

const Warning: React.FC<WarningProps> = ({ message, duration = 3000 }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false); 
    }, duration);

    return () => clearTimeout(timer); 
  }, [duration]);

  if (!isVisible) return null;

  return (
    <div className={styles.warning}>
      {message}
    </div>
  );
};

export default Warning;
