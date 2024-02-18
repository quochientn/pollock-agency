import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";

const StyledImg = styled.img`
  height: 2rem;

  @media screen and (max-width: 600px) {
    height: 1.5rem;
  }
`;

function Partners() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap={{ md: 8, xs: 4 }}
      pt={{ md: 6, xs: 2 }}
    >
      <Typography
        color="pollockText.heading"
        textAlign="center"
        paragraph
        sx={{
          typography: {
            sm: "headline2",
            xs: "headline3",
          },
        }}
      >
        Working with the most trusted brands in the industry
      </Typography>

      <Box
        display={{ md: "flex", xs: "grid" }}
        alignItems="center"
        gap={{ md: 8, xs: 12 }}
        gridTemplateColumns="1fr 1fr"
      >
        <StyledImg src="/google.png" alt="Google logo" />
        <StyledImg src="/netflix.png" alt="Google logo" />
        <StyledImg src="/slack.png" alt="Slack logo" />
        <StyledImg src="/intercom.png" alt="Intercom logo" />
      </Box>
    </Box>
  );
}

export default Partners;
