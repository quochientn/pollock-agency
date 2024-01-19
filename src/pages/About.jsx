import Facts from "../ui/Facts";
import Introduction from "../ui/Introduction";
import Testimonials from "../ui/Testimonials";
import TopBanner from "../ui/TopBanner";

function About() {
  return (
    <>
      <TopBanner title="About us" page="about" />
      <Introduction />
      <Facts />
      <Testimonials />
    </>
  );
}

export default About;
