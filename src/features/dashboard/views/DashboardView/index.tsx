import BlogPosts from "features/dashboard/components/BlogPosts";
import { useGetPostsQuery } from "features/dashboard/services";
import LoadingIndicator from "shared/components/LoadingIndicator";

import "./style.scss";

const Home = () => {
  const { data, isLoading } = useGetPostsQuery();

  return isLoading ? (
    <LoadingIndicator />
  ) : (
    <div className="HomeContainer">
      <BlogPosts posts={data} />
    </div>
  );
};

export default Home;
