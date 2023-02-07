import React from 'react';
import cl from 'classnames';

import styles from './PostGrid.module.scss'

const PostGrid = ({children}) => {
    return (
        <div className={styles.postGrid}>
            {children}
        </div>
    );
};

export default PostGrid;