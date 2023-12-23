import "./style.scss";

const BlogPostItem = ({ post }: { post: PostType }) => (
  <div className="BlogPost">
    <h3 className="BlogPost__title">{post.title}</h3>
    <p className="BlogPost__body">{post.body}</p>
  </div>
);

export default BlogPostItem;
