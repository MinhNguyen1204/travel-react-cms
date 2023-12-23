import BlogPostItem from "../BlogPostItem";


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
