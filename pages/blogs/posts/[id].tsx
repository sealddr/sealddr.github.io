import { Container } from 'react-bootstrap';
import { GetStaticProps, GetStaticPaths } from 'next';

interface Post {
  title: string;
  content: string;
}

interface Props {
  post?: Post;
}

export default function Post({ post }: Props) {
  if (!post) {
    return <div>記事が見つかりませんでした。</div>;
  }

  return (
    <Container>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </Container>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  // ブログ記事のIDのリストを取得する処理を実装する
  const paths: never[] = [];

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  // ブログ記事のIDに対応する記事のデータを取得する処理を実装する
  const post: Post = {
    title: 'No title',
    content: 'No content',
  };

  return {
    props: {
      post,
    },
  };
};