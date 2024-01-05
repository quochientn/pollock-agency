import { Box, Button, Input, Stack, Typography } from "@mui/material";

function Newsletter() {
  return (
    <Stack>
      <Typography variant="headline3" color="pollockText.textWhite" paragraph>
        Newsleter
      </Typography>

      <Typography variant="paragraph2" color="pollockText.textGrey" paragraph>
        Subscribe to our newsletter to keep up to date on our marketing,
        website, design services, and tips.
      </Typography>

      <Box>
        <Box component="form" display="flex" alignItems="center" gap={1} mb={1}>
          <Input
            type="email"
            placeholder="Enter email"
            sx={{
              backgroundColor: "pollockText.textGrey",
              borderRadius: "5px",
              paddingX: "1rem",
              paddingY: "0.5rem",
              "&:hover": { borderBottom: "none" },
              "&:focus": { borderBottom: "none" },
            }}
          />
          <Button variant="buttonBig">Submit</Button>
        </Box>

        <Typography variant="paragraph3" color="pollockText.textGrey" paragraph>
          We hate spam as much as you do. We will never, ever send you such
          emails.
        </Typography>
      </Box>
    </Stack>
  );
}

export default Newsletter;
