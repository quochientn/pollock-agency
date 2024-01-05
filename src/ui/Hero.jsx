import {
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import styled from "@emotion/styled";
import { ArrowDownward, PlayArrow } from "@mui/icons-material";

const HERO_ASPECT_RATIO = 485 / 570;

const StyledImg = styled.img`
  width: 450px;
  height: ${450 / HERO_ASPECT_RATIO}px;
`;

const StyledGradientText = styled.span`
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
        height: "95vh",
        position: "relative",
      }}
    >
      <Container maxWidth="lg">
        <Box display="flex" gap={6} py={8}>
          <Stack justifyContent="center" spacing={4}>
            <Typography variant="display1">
              Branding to fuel your growth{" "}
              <StyledGradientText>goals & ideas.</StyledGradientText>
            </Typography>

            <Typography variant="paragraph1">
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
              <Typography variant="link">How it works</Typography>
            </Box>
          </Stack>

          <Box>
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
