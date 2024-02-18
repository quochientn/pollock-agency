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
            color="pollockText.heading"
            component="h3"
            sx={{
              typography: { md: "display3", sm: "headline1", xs: "headline2" },
            }}
          >
            What our clients are saying about us
          </Typography>

          <Typography variant="headline3" color="pollockText.text" paragraph>
            Customer satisfaction is a primary goal for our company
          </Typography>
        </Box>

        <TestimonialCards />
      </Container>
    </Box>
  );
}

export default Testimonials;
