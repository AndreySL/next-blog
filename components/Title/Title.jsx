import React from 'react';
import cl from 'classnames';

import styles from './Title.module.scss';

const Title = ({ children, type}) => {
  {
    if (type === 'small') {
      return <h3 className={cl( styles.title, styles.titleSmall)}>{children}</h3>;
    }

    return <h2 className={cl( styles.title, styles.titleMedium)}>{children}</h2>;
  }
};
export default Title;
