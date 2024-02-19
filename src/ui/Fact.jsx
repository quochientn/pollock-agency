import { Box, Typography } from "@mui/material";

function Fact({ number, title, subTitle }) {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
      <Typography
        color="var(--color-action-purple)"
        component="h2"
        sx={{
          typography: {
            md: "display2",
            xs: "display3",
          },
        }}
      >
        {number}
      </Typography>

      <Typography
        variant="headline3"
        color="pollockText.textWhite"
        textAlign="center"
        paragraph
      >
        {title}
      </Typography>

      <Typography
        variant="paragraph1"
        color="pollockText.text"
        mt={2}
        mb={0}
        textAlign="center"
        paragraph
      >
        {subTitle}
      </Typography>
    </Box>
  );
}

export default Fact;
