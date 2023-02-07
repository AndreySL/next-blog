import {useState} from 'react';
import {
  Button,
  Cover,
  Github,
  Post,
  PostGrid,
  Section,
  SocialNetworks,
  Title,
} from '@/components';
import {loadData} from './api/posts';
import Head from 'next/head';

const LOAD_MORE_STEP = 4;

export default function Home({initialPosts, total}) {
  const [posts, setPosts] = useState(initialPosts);
  const [loadedAmount, setLoadedAmount] = useState(LOAD_MORE_STEP);
  const [loading, setLoading] = useState(false);

  const isLoadButton = total > loadedAmount;

  const getMorePosts = async () => {
    setLoading(true);

    try {
      const data = await fetch(
        `/api/posts?start=${loadedAmount}&end=${loadedAmount + LOAD_MORE_STEP}`,
      ).then((response) => response.json());
      setLoadedAmount(loadedAmount + LOAD_MORE_STEP);
      setPosts([...posts, ...data.posts]);
      setLoading(false);
    } catch (error) {
      alert(error)
      setLoading(false);
    }
  };

  return (
    <div>
      <Head>
        <title>My blog</title>
      </Head>
      <Section>
        <Cover />
        <SocialNetworks />
        <Github />
      </Section>
      <Section>
        <Title>Posts list</Title>
        <PostGrid>
          {posts.map((post) => {
            return <Post key={post.slug.current} {...post} />;
          })}
        </PostGrid>
        {isLoadButton && (
          <div className='centred'>
            <Button onClick={getMorePosts} disabled={loading}>
              Load more posts...
            </Button>
          </div>
        )}
      </Section>
    </div>
  );
}

export async function getServerSideProps() {
  const {posts, total} = await loadData(0, LOAD_MORE_STEP);

  return {
    props: {
      initialPosts: posts,
      total,
    },
  };
}
