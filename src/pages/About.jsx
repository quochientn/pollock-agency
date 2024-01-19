import Facts from "../ui/Facts";
import Testimonials from "../ui/Testimonials";
import TopBanner from "../ui/TopBanner";

function About() {
  return (
    <>
      <TopBanner title="About us" page="about" />
      <Facts />
      <Testimonials />
    </>
  );
}

export default About;
