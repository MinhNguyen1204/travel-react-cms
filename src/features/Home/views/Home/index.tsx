import BlogPosts from "features/Home/components/BlogPosts";
import { useGetPostsQuery } from "features/Home/services";
import LoadingIndicator from "shared/components/LoadingIndicator";
import "./style.scss";

const Home = () => {
  const { data, isLoading } = useGetPostsQuery();

  return (
    isLoading ? <LoadingIndicator /> :<div className="HomeContainer">
      <BlogPosts posts={data} />
    </div>
  );
};

export default Home;
