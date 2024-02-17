import FeaturesDetail from "../ui/FeaturesDetail";
import Partners from "../ui/Partners";
import Testimonials from "../ui/Testimonials";
import TopBanner from "../ui/TopBanner";

function Services() {
  return (
    <>
      <TopBanner title="Our services" page="Services" />
      <FeaturesDetail />
      <Partners />
      <Testimonials />
    </>
  );
}

export default Services;
