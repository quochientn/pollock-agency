import { Box, Button, Typography } from "@mui/material";

function Error() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap={2}
      mt={20}
    >
      <Typography variant="display1" color="pollockText.heading" component="h1">
        Something went wrong
      </Typography>

      <Typography variant="paragraph1" color="pollockText.text" paragraph>
        The page you found could not exist. Please try again!
      </Typography>

      <Button variant="buttonBig" href="/">
        Back to home page
      </Button>
    </Box>
  );
}

export default Error;
