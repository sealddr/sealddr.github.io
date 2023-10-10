import { Container, ListGroup } from 'react-bootstrap';
import Link from 'next/link';

interface Post {
  id: string;
  title: string;
  content: string;
}

interface Props {
  posts: Post[];
}

export default function Posts({ posts }: Props) {
  return (
    <Container>
      <h1>Posts</h1>
      <ListGroup>
        {posts.map((post) => (
          <Link href={`/blogs/posts/${post.id}`} key={post.id}>
            <ListGroup.Item action>{post.title}</ListGroup.Item>
          </Link>
        ))}
      </ListGroup>
    </Container>
  );
}

export async function getStaticProps(): Promise<{ props: Props }> {
  // ブログ記事の一覧を取得する処理を実装する
  const posts: Post[] = [];

  return {
    props: {
      posts,
    },
  };
}