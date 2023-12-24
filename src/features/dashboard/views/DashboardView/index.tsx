import BlogPosts from "features/dashboard/components/BlogPosts";
import { useGetPostsQuery } from "features/dashboard/services";
import { MarkerIcon } from "icons/MarkerIcon";
import LoadingIndicator from "shared/components/LoadingIndicator";

import "./style.scss";

const Home = () => {
  const { data, isLoading } = useGetPostsQuery();

  if (isLoading) return <LoadingIndicator />;

  return (
    <div className="HomeContainer">
      <img src="/images/pet.jpg" className="w-52" />
      <img src="/svg/marker.svg" />
      <MarkerIcon color="#333" />
      <BlogPosts posts={data} />
    </div>
  );
};

export default Home;
