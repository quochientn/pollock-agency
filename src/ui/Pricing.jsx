import { useState } from "react";
import { Box, Container, Typography } from "@mui/material";

import SwitchOptions from "./SwitchOptions";
import PricingOptions from "./PricingOptions";

function Pricing() {
  const [annualPrice, setAnnualPrice] = useState(false);

  const handleChange = function () {
    setAnnualPrice((state) => !state);
  };

  return (
    <Box
      component="section"
      py={12}
      sx={{ backgroundColor: "pollockBackground.light" }}
    >
      <Container maxWidth="lg">
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap={4}
          textAlign="center"
          sx={{ position: "relative" }}
          pb={{ md: 35 }}
        >
          <Typography
            color="pollockText.heading"
            component="h3"
            sx={{
              typography: { md: "display3", sm: "headline1", xs: "headline2" },
            }}
          >
            Set up your app, pick a plan later
          </Typography>

          <Typography variant="headline3" color="pollockText.text" paragraph>
            Try Shopify free for 14 days, no credit card required
          </Typography>

          <SwitchOptions annualPrice={annualPrice} onChange={handleChange} />

          <PricingOptions annualPrice={annualPrice} />
        </Box>
      </Container>
    </Box>
  );
}

export default Pricing;
