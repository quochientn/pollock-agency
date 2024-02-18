import { Box } from "@mui/material";

import FeaturesDetail from "../ui/FeaturesDetail";
import Partners from "../ui/Partners";
import Pricing from "../ui/Pricing";
import Testimonials from "../ui/Testimonials";
import TopBanner from "../ui/TopBanner";

function Services() {
  return (
    <>
      <TopBanner title="Our services" page="Services" />
      <FeaturesDetail />
      <Pricing />
      <Box my={12} pt={{ md: 35 }}>
        <Partners />
      </Box>
      <Testimonials />
    </>
  );
}

export default Services;
