import {
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import { ArrowDownward, PlayArrow } from "@mui/icons-material";

const StyledImg = styled("img")`
  width: 100%;

  @media screen and (max-width: 900px) {
    width: 50%;
  }

  @media screen and (max-width: 600px) {
    width: 80%;
  }
`;

const StyledGradientText = styled("span")`
  background: linear-gradient(
    92deg,
    var(--color-action-purple) 32.21%,
    var(--color-action-pink) 83.79%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

function Hero() {
  return (
    <Box
      component="section"
      py={6}
      sx={{
        backgroundColor: "pollockBackground.lightAlt",
        height: { md: "95vh" },
        position: "relative",
      }}
    >
      <Container maxWidth="lg">
        <Box
          display="flex"
          flexDirection={{ md: "row", xs: "column-reverse" }}
          gap={6}
          py={8}
        >
          <Stack justifyContent="center" spacing={4}>
            <Typography
              color="pollockText.heading"
              component="h1"
              sx={{
                typography: {
                  md: "display2",
                  xs: "display3",
                },
              }}
            >
              Branding to fuel your growth{" "}
              <StyledGradientText>goals & ideas.</StyledGradientText>
            </Typography>

            <Typography variant="paragraph1" color="pollockText.text" paragraph>
              We're a digital product and UX agency in San Francisco. Strategy,
              design, and development across all platforms.
            </Typography>

            <Box display="flex" alignItems="center" gap={1.5} pt={5}>
              <Button variant="buttonBig">Get started</Button>
              <IconButton
                size="large"
                sx={{
                  color: "pollockAction.blue",
                  backgroundColor: "pollockBackground.white",
                }}
              >
                <PlayArrow
                  sx={{
                    width: "1.5rem",
                    height: "1.5rem",
                    fontSize: "1.5rem",
                  }}
                />
              </IconButton>
              <Typography variant="link" color="pollockText.heading">
                How it works
              </Typography>
            </Box>
          </Stack>

          <Box textAlign="center">
            <StyledImg src="/hero.png" alt="hero" />
          </Box>
        </Box>
      </Container>

      <IconButton
        size="large"
        sx={{
          color: "pollockText.textWhite",
          position: "absolute",
          top: "100%",
          left: "50%",
          transform: "translateY(-50%)",
          backgroundColor: "#F9C45C",
          "&:hover": {
            backgroundColor: "var(--color-action-orange)",
          },
        }}
      >
        <ArrowDownward />
      </IconButton>
    </Box>
  );
}

export default Hero;
