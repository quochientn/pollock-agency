import { Box, Container, Divider, IconButton, Typography } from "@mui/material";
import Grid from "@mui/system/Unstable_Grid/Grid";
import Logo from "./Logo";
import FooterList from "./FooterList";
import Newsletter from "./Newsletter";
import { Facebook, LinkedIn, Twitter } from "@mui/icons-material";

const pages = ["About", "Work", "Careers", "Pricing", "Blog"];
const services = [
  "Branding",
  "Websites",
  "Development",
  "Strategy",
  "Platforms",
];
const contactOptions = ["Help desk", "Docs", "Open a ticket", "Chat", "Forum"];

function Footer() {
  return (
    <Box
      component="footer"
      pt={12}
      sx={{ backgroundColor: "pollockBackground.grey" }}
    >
      <Container maxWidth="lg">
        <Grid container columnSpacing={2} pb={3}>
          <Grid md={2}>
            <Logo light={true} />
          </Grid>

          <Grid md={2}>
            <FooterList title="Company" array={pages} />
          </Grid>

          <Grid md={2}>
            <FooterList title="Services" array={services} />
          </Grid>

          <Grid md={2}>
            <FooterList title="Contact" array={contactOptions} />
          </Grid>

          <Grid md={4}>
            <Newsletter />
          </Grid>
        </Grid>

        <Divider sx={{ borderColor: "pollockText.text" }} />

        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          py={3}
        >
          <Typography
            variant="paragraph2"
            color="pollockText.textGrey"
            paragraph
            mb={0}
          >
            &copy; {new Date().getFullYear()} Pollock LLC. All Rights Reserved.
            Terms & Conditions. Privacy Policy.
          </Typography>

          <Box>
            <IconButton href="#">
              <Facebook
                sx={{ color: "pollockAction.blue", fontSize: "2rem" }}
              />
            </IconButton>
            <IconButton href="#">
              <Twitter sx={{ color: "pollockAction.blue", fontSize: "2rem" }} />
            </IconButton>
            <IconButton href="#">
              <LinkedIn
                sx={{ color: "pollockAction.blue", fontSize: "2rem" }}
              />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
