import { Box, Container, TextField, Typography } from "@mui/material";
import Grid from "@mui/system/Unstable_Grid/Grid";

function FormContact() {
  return (
    <Container maxWidth="lg" component="section" sx={{ py: "6rem" }}>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap={4}
        textAlign="center"
        mb={8}
      >
        <Typography
          variant="display3"
          color="pollockText.heading"
          component="h3"
        >
          An outstanding strategy, design, and development across all platforms
        </Typography>

        <Typography
          variant="paragraph1"
          color="pollockText.text"
          mb={1}
          paragraph
        >
          Share ideas, make decisions and move work forward with a common
          purpose and place
        </Typography>

        <Box display="flex" gap={10}>
          <Grid
            container
            rowSpacing={3}
            columnSpacing={3}
            p={4}
            sx={{
              backgroundColor: "pollockBackground.light",
              borderRadius: "10px",
            }}
          >
            <Grid md={12}>
              <Typography
                variant="headline4"
                color="pollockText.heading"
                paragraph
                textAlign="left"
              >
                Write a comment
              </Typography>
            </Grid>
            <Grid md={6}>
              <TextField
                id="name"
                label="Name"
                variant="outlined"
                type="text"
                fullWidth
                required
                sx={{ backgroundColor: "var(--color-background-white)" }}
              />
            </Grid>
            <Grid md={6}>
              <TextField
                id="email"
                label="Email"
                variant="outlined"
                type="email"
                fullWidth
                required
                sx={{ backgroundColor: "var(--color-background-white)" }}
              />
            </Grid>
            <Grid md={6}>
              <TextField
                id="company"
                label="Company"
                variant="outlined"
                type="text"
                fullWidth
                sx={{ backgroundColor: "var(--color-background-white)" }}
              />
            </Grid>
            <Grid md={6}>
              <TextField
                id="phone"
                label="Phone"
                variant="outlined"
                type="text"
                fullWidth
                sx={{ backgroundColor: "var(--color-background-white)" }}
              />
            </Grid>
            <Grid md={12}>
              <TextField
                id="comment"
                label="Comment"
                variant="outlined"
                type="text"
                required
                fullWidth
                multiline={true}
                rows={3}
                sx={{ backgroundColor: "var(--color-background-white)" }}
              />
            </Grid>
            <Grid md={12} textAlign="right">
              <TextField
                type="submit"
                value="submit"
                sx={{
                  backgroundColor: "var(--color-action-blue)",
                  borderRadius: "5px",
                  width: "150px",
                  "&:hover": {
                    backgroundColor: "var(--color-action-dark-blue)",
                    transition: "ease 0.3s",
                  },
                }}
              />
            </Grid>
          </Grid>
          <Box display="flex" alignItems="center">
            <img src="/form-image.png" alt="Form" width="100%" />
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default FormContact;
