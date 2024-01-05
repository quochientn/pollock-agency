import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Partners from "./Partners";
import FeaturedCards from "./FeaturedCards";

function Features() {
  return (
    <Container component="section" maxWidth="lg" sx={{ paddingY: "6rem" }}>
      <Stack spacing={9}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap={2}
          textAlign="center"
        >
          <Typography variant="display2" color="pollockText.heading" paragraph>
            We design engaging digital products used by millions of people
          </Typography>
          <Typography variant="paragraph1" color="pollockText.text" paragraph>
            We team up with marketing departments of large companies and
            startups to deliver award‑winning websites
          </Typography>
        </Box>

        <FeaturedCards />

        <Box textAlign="center">
          <Button variant="buttonBig">View our services</Button>
        </Box>

        <Partners />
      </Stack>
    </Container>
  );
}

export default Features;
