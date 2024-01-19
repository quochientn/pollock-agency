import PageUpdating from "../ui/PageUpdating";
import TopBanner from "../ui/TopBanner";

function Blog() {
  return (
    <>
      <TopBanner title="Our latest news" page="Blog" />
      <PageUpdating />;
    </>
  );
}

export default Blog;
