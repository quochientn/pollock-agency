import { Box, Container, Divider, IconButton, Typography } from "@mui/material";
import Grid from "@mui/system/Unstable_Grid/Grid";
import { Facebook, LinkedIn, Twitter } from "@mui/icons-material";

import Logo from "./Logo";
import FooterList from "./FooterList";
import Newsletter from "./Newsletter";

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
        <Grid
          container
          columnSpacing={{ md: 2, sm: 6 }}
          rowSpacing={{ sm: 2 }}
          pb={3}
        >
          <Grid md={2} sm={3} xs={12}>
            <Logo light={true} />
          </Grid>

          <Grid md={2} sm={3} xs={6}>
            <FooterList title="Company" array={pages} />
          </Grid>

          <Grid md={2} sm={3} xs={6}>
            <FooterList title="Services" array={services} />
          </Grid>

          <Grid md={2} sm={3} xs={6}>
            <FooterList title="Contact" array={contactOptions} />
          </Grid>

          <Grid md={4} xs={12}>
            <Newsletter />
          </Grid>
        </Grid>

        <Divider sx={{ borderColor: "pollockText.text" }} />

        <Box
          display="flex"
          flexDirection={{ md: "row", xs: "column" }}
          alignItems="center"
          justifyContent="space-between"
          gap={3}
          py={3}
        >
          <Typography
            variant="paragraph2"
            color="pollockText.textGrey"
            paragraph
            mb={0}
            textAlign={{ xs: "center" }}
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
