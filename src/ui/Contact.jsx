import { Box, Button, Container, Typography } from "@mui/material";

function Contact() {
  return (
    <Box
      component="section"
      py={12}
      sx={{ backgroundColor: "pollockBackground.lightAlt" }}
    >
      <Container maxWidth="md">
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap={4}
          textAlign="center"
        >
          <Typography
            color="pollockText.heading"
            component="h3"
            sx={{
              typography: { md: "display3", sm: "headline1", xs: "headline2" },
            }}
          >
            We design & develop transformative user experiences from Silicon
            Valley
          </Typography>

          <Typography variant="headline3" color="pollockText.text" paragraph>
            Are you ready to start your project? Contact us today and get
            started!
          </Typography>

          <Button variant="buttonBig" sx={{ marginTop: "2.5rem" }}>
            Get started
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default Contact;
