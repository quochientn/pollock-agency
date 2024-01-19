import { Box, Container, Typography } from "@mui/material";

import TestimonialCards from "./TestimonialCards";

function Testimonials() {
  return (
    <Box component="section" bgcolor="pollockBackground.light">
      <Container maxWidth="lg" sx={{ paddingY: "6rem" }}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap={4}
          textAlign="center"
          mb={8}
        >
          <Typography
            variant="display3"
            color="pollockText.heading"
            component="h3"
          >
            What our clients are saying about us
          </Typography>

          <Typography variant="paragraph1" color="pollockText.text" paragraph>
            Customer satisfaction is a primary goal for our company
          </Typography>
        </Box>

        <TestimonialCards />
      </Container>
    </Box>
  );
}

export default Testimonials;
