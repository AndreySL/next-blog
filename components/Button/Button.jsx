import React from 'react';
import styles from './Button.module.scss';

const Button = ({children, onClick, disabled}) => {
  return (
    <button className={styles.button} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
