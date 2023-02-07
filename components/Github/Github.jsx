import React from 'react';
import styles from './Github.module.scss';
import Link from 'next/link';
import {ScreenEgg} from '../index';

const Github = () => {
  return (
    <ScreenEgg type="right">
      <div className={styles.github}>
        <Link href="http://github.com/andreySL/next-blog" target="_blank" className={styles.githubButton}>
          Repository
        </Link>
      </div>
    </ScreenEgg>
  );
};

export default Github;
