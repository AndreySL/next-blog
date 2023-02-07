import React from 'react';

import styles from './Cover.module.scss';

const Cover = ({title}) => {
  return (
    <div className={styles.cover}>
      <h1 className={styles.title}>
        Andrey
          <br />
        Nesin
      </h1>
    </div>
  );
};

export default Cover;
