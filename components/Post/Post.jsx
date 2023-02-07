import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {urlFor} from '@/lib/client';
import {Title} from '@/components';
import cl from 'classnames';

import styles from './Post.module.scss';

const Post = ({image, title, description, slug}) => {
  return (
    <Link
      href={`/post/${encodeURIComponent(slug.current)}`}
      className={cl(styles.post, styles.postLink)}>
        <Title type="small" className={cl(styles.postTitle)}>
          {title}
        </Title>
        <div className={styles.postContent}>
            <div>
                <Image 
                    src={urlFor(image).url()}
                    alt={image.caption}
                    width='100'
                    height='100'
                />
            </div>
            <p className={styles.postDescription}>
                {description}
            </p>
        </div>
    </Link>
  );
};

export default Post;
