import { PostType } from 'features/Home/types/post';
import BlogPostItem from 'features/Home/components/BlogPostItem';

const BlogPosts = ({ posts }: { posts: PostType[] }) => (
  <>
    {
      posts.map((post) => (
        <BlogPostItem key={post.id} post={post} />
      ))
    }
  </>
);

export default BlogPosts;
