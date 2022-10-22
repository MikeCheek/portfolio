import React from 'react';
import styles from './index.module.scss';
import PopUpProps from './index.types';

const Index = ({ children, top, left, right, onClick = () => null }: PopUpProps) => {
  return (
    <div
      onClick={onClick}
      style={{ transform: `translateY(${top}px)`, left: left, right: right }}
      className={styles.popUp}
    >
      {children}
    </div>
  );
};

export default Index;
