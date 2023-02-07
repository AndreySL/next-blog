import React from 'react';
import styles from './Content.module.scss';
import SanityBlockContent from '@sanity/block-content-to-react';
import {clientConfig} from '@/lib/client';

const Content = ({body}) => {
  return (
    <div className={styles.content}>
      <SanityBlockContent
        blocks={body}
        imageOptions={{w: 1000, h: 750, fit: 'max'}}
        projectId={clientConfig.projectId}
        dataset={clientConfig.dataset}
      />
    </div>
  );
};

export default Content;
