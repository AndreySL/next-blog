import React from 'react';
import styles from './article.module.scss';
import Link from 'next/link';
import {AiOutlineArrowLeft} from 'react-icons/ai';

const Article = ({backUrl, children}) => {
  return (
    <article className={styles.article}>
      <Link href={backUrl} className={styles.articleBack}>
        <AiOutlineArrowLeft />
      </Link>
      <div className={styles.articleContent}>{children}</div>
    </article>
  );
};

export default Article;
