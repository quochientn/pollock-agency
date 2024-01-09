import { Box, Button, Container, Typography } from "@mui/material";
import Grid from "@mui/system/Unstable_Grid/Grid";
import GradientBackground from "./GradientBackground";

function Products() {
  return (
    <Box
      component="section"
      py={12}
      sx={{ backgroundColor: "pollockBackground.lightAlt" }}
    >
      <Container maxWidth="lg">
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
            Digital products that people love to use
          </Typography>

          <Typography variant="paragraph1" color="pollockText.text" paragraph>
            Applying behavioral science to customer experience
          </Typography>
        </Box>

        <Grid container rowSpacing={18} columnSpacing={2} alignItems="center">
          <Grid md={6}>
            <GradientBackground option="web3">
              <img
                src="/profile-card.png"
                alt="Profile card"
                className="products__web3 products__web3--profile-card"
              />
              <img
                src="/web3-design.jpg"
                alt="Web3 design"
                className="products__web3 products__web3--design"
              />
            </GradientBackground>
          </Grid>
          <Grid md={6}>
            <Typography
              variant="headline2"
              color="pollockText.heading"
              paragraph
            >
              Web3 Experience Design
            </Typography>

            <Typography variant="paragraph1" color="pollockText.text" paragraph>
              In the new digital era, users are in control of content and
              community, and experience design is essential.
            </Typography>
          </Grid>

          <Grid md={6}>
            <Typography
              variant="headline2"
              color="pollockText.heading"
              paragraph
            >
              We create world-class products
            </Typography>

            <Typography variant="paragraph1" color="pollockText.text" paragraph>
              We're a web design agency creating next‑level websites by
              strategically blending user experience and brand storytelling.
              <br />
              <br />
              Our full‑stack design and development agency based in San
              Francisco provides front‑end and back‑end development services
              working closely with our designers. As a UX UI and app development
              company, we build native mobile apps for iOS and Android, web
              applications, apps for wearables, and B2B/enterprise software.
            </Typography>

            <Button variant="buttonBig" sx={{ marginTop: "2.5rem" }}>
              Discover now
            </Button>
          </Grid>
          <Grid md={6}>
            <Box display="flex" justifyContent="flex-end">
              <GradientBackground option="product">
                <img
                  src="chart-1.png"
                  alt="Chart 1"
                  className="products__product products__product--chart-1"
                />
                <img
                  src="chart-2.png"
                  alt="Chart 2"
                  className="products__product products__product--chart-2"
                />
              </GradientBackground>
            </Box>
          </Grid>

          <Grid md={6}>
            <GradientBackground option="design">
              <img
                src="gradient-bg2.jpg"
                alt="Gradient background"
                className="products__design products__design--gradient"
              />
              <img
                src="chart-3.png"
                alt="Chart 3"
                className="products__design products__design--chart-3"
              />
            </GradientBackground>
          </Grid>
          <Grid md={6}>
            <Typography
              variant="headline2"
              color="pollockText.heading"
              paragraph
            >
              UI/UX design and branding agency
            </Typography>

            <Typography variant="paragraph1" color="pollockText.text" paragraph>
              We start each new digital product design partnership with an
              in‑depth discovery phase to immerse ourselves in your business.
              Our UX/UI designers interview stakeholders, conduct user research,
              analyze your competition, and consolidate content.
              <br />
              <br />
              The result is an action plan on executing a holistic brand and
              user experience.
            </Typography>

            <Button variant="buttonBig" sx={{ marginTop: "2.5rem" }}>
              Our services
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Products;
