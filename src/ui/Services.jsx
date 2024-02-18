import { Container, Typography } from "@mui/material";

import Stories from "./Stories";

function Services() {
  return (
    <Container maxWidth="lg" component="section" sx={{ paddingY: "6rem" }}>
      <Typography
        color="pollockText.heading"
        align="center"
        paragraph
        mb={10}
        sx={{
          typography: {
            md: "headline1",
            xs: "headline2",
          },
        }}
      >
        Explore our recent client success stories and witness our full 360
        transformations come to life
      </Typography>

      <Stories />
    </Container>
  );
}

export default Services;
