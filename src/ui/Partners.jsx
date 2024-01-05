import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";

const StyledImg = styled.img`
  height: 2rem;
`;

function Partners() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap={10}
      pt={6}
    >
      <Typography variant="headline2">
        Working with the most trusted brands in the industry
      </Typography>

      <Box display="flex" alignItems="center" gap={8}>
        <StyledImg src="/google.png" alt="Google logo" />
        <StyledImg src="/netflix.png" alt="Google logo" />
        <StyledImg src="/slack.png" alt="Slack logo" />
        <StyledImg src="/intercom.png" alt="Intercom logo" />
      </Box>
    </Box>
  );
}

export default Partners;
