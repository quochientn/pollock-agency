import { Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";
import Grid from "@mui/system/Unstable_Grid/Grid";

const StyledImg = styled("img")`
  height: 500px;
  width: auto;
  border-radius: 2.5rem;
  object-fit: cover;

  @media screen and (max-width: 900px) {
    height: 100%;
  }
`;

function Stories() {
  return (
    <Grid container columnSpacing={4} rowSpacing={6}>
      <Grid md={7}>
        <Stack spacing={3}>
          <StyledImg src="/story-1.jpg" alt="Story 1" />
          <Typography variant="headline3" color="pollockAction.blue" paragraph>
            UX/UI Design
          </Typography>
        </Stack>
      </Grid>

      <Grid md={5}>
        <Stack spacing={3}>
          <StyledImg src="/story-2.jpg" alt="Story 2" />
          <Typography variant="headline3" color="pollockAction.blue" paragraph>
            NFT Market UI
          </Typography>
        </Stack>
      </Grid>

      <Grid md={5}>
        <Stack spacing={3}>
          <StyledImg src="/story-3.jpg" alt="Story 3" />
          <Typography variant="headline3" color="pollockAction.blue" paragraph>
            Health Mobile App
          </Typography>
        </Stack>
      </Grid>

      <Grid md={7}>
        <Stack spacing={3}>
          <StyledImg src="/story-4.jpg" alt="Story 4" />
          <Typography variant="headline3" color="pollockAction.blue" paragraph>
            Wallet App Development
          </Typography>
        </Stack>
      </Grid>
    </Grid>
  );
}

export default Stories;
