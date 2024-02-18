import { Button, Container, Typography, styled } from "@mui/material";
import Grid from "@mui/system/Unstable_Grid/Grid";

const StyledImg = styled("img")`
  width: 32rem;
  height: 32rem;
  object-fit: cover;
  border-radius: 1.25rem;
`;

function Introduction() {
  return (
    <Container maxWidth="lg" component="section" sx={{ py: "6rem" }}>
      <Typography
        variant="display3"
        color="pollockText.heading"
        align="center"
        component="h3"
        mb={10}
      >
        A design and branding agency in New York
      </Typography>

      <Grid container spacing={12} alignItems="center">
        <Grid md={6}>
          <Typography
            color="pollockText.heading"
            paragraph
            sx={{
              typography: {
                sm: "headline2",
                xs: "headline3",
              },
            }}
          >
            SEO-focused WordPress web design and marketing agency
          </Typography>

          <Typography variant="paragraph1" color="pollockText.text" paragraph>
            A brand today is all about how it makes your customers feel. It's
            not a logo, visual identity, or digital product design. but rather a
            cohesive system that spans across all mediums and touchpoints. We're
            a branding agency offering a complete solution from naming and logo
            design to communications and style guides.
          </Typography>

          <Button variant="buttonBig" sx={{ marginTop: "2.5rem" }}>
            Learn more
          </Button>
        </Grid>
        <Grid md={6}>
          <StyledImg src="/about-1.jpg" alt="Introduction illustration" />
        </Grid>

        <Grid md={6}>
          <StyledImg src="/about-2.jpg" alt="Introduction illustration" />
        </Grid>
        <Grid md={6}>
          <Typography
            color="pollockText.heading"
            paragraph
            sx={{
              typography: {
                sm: "headline2",
                xs: "headline3",
              },
            }}
          >
            Branding has never been more agile than it is today
          </Typography>

          <Typography variant="paragraph1" color="pollockText.text" paragraph>
            A brand today is all about how it makes your customers feel. It's
            not a logo, visual identity, or digital product design. but rather a
            cohesive system that spans across all mediums and touchpoints. We're
            a branding agency offering a complete solution from naming and logo
            design to communications and style guides.
          </Typography>

          <Button variant="buttonBig" sx={{ marginTop: "2.5rem" }}>
            Discover now
          </Button>
        </Grid>

        <Grid md={6}>
          <Typography
            color="pollockText.heading"
            paragraph
            sx={{
              typography: {
                sm: "headline2",
                xs: "headline3",
              },
            }}
          >
            We are a digital product and user experience design agency
          </Typography>

          <Typography variant="paragraph1" color="pollockText.text" paragraph>
            A brand today is all about how it makes your customers feel. It's
            not a logo, visual identity, or digital product design. but rather a
            cohesive system that spans across all mediums and touchpoints. We're
            a branding agency offering a complete solution from naming and logo
            design to communications and style guides.
          </Typography>

          <Button variant="buttonBig" sx={{ marginTop: "2.5rem" }}>
            Contact us
          </Button>
        </Grid>
        <Grid md={6}>
          <StyledImg src="/about-3.jpg" alt="Introduction illustration" />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Introduction;
