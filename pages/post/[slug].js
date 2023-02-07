import React from 'react';
import {Article, Content, Title} from '@/components';
import {client} from '@/lib/client';
import styles from './styles.module.scss';
import Head from 'next/head';
import format from 'date-fns/format';

const Post = ({post}) => {
  const date = format(new Date(post.publishedDate), 'dd MMM yyy');
  return (
    <Article backUrl='/' className={styles.post}>
      <Head>
        <title>{post.meta_title}</title>
      </Head>
      <Title className={styles.postTitle}>{post.title}</Title>
      <p className={styles.postDate}>{date}</p>
      <Content body={post.body} />
    </Article>
  );
};

export default Post;

export async function getStaticPaths() {
  const query = `*[type == 'post'] {
        slug {
            current
        }
    }`;
  const posts = await client.fetch(query);
  const paths = posts.map((post) => {
    params: {
      slug: post.slug.current;
    }
  });

  return {
    paths,
    fallback: 'blocking',
  };
}
export async function getStaticProps({params: {slug}}) {
  const query = `*[_type == "post" && slug.current == '${slug}'][0]`;

  const post = await client.fetch(query);

  return {
    props: {
      post,
    },
  };
}
