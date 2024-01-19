import { Box, Typography } from "@mui/material";

function Fact({ number, title, subTitle }) {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
      <Typography
        variant="display2"
        color="var(--color-action-purple)"
        component="h2"
      >
        {number}
      </Typography>

      <Typography variant="headline3" color="pollockText.textWhite" paragraph>
        {title}
      </Typography>

      <Typography
        variant="paragraph1"
        color="pollockText.text"
        mt={2}
        mb={0}
        align="center"
        paragraph
      >
        {subTitle}
      </Typography>
    </Box>
  );
}

export default Fact;