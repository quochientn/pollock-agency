import {
  AppBar,
  Box,
  Container,
  Slide,
  Toolbar,
  useScrollTrigger,
} from "@mui/material";

import Logo from "./Logo";
import NavMenu from "./NavMenu";
import HeaderButtons from "./HeaderButtons";
import ElevationScroll from "./ElevationScroll";

function Header() {
  const trigger = useScrollTrigger();
  const backgroundTrigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return (
    <ElevationScroll>
      <Slide appear={false} direction="down" in={!trigger}>
        <AppBar
          sx={{
            backgroundColor: `${
              backgroundTrigger ? "pollockBackground.lightAlt" : "transparent"
            }`,
          }}
        >
          <Toolbar>
            <Container maxWidth="lg">
              <Box
                py={2}
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                width={{ lg: "72rem", xs: "90%" }}
              >
                <Logo />
                <NavMenu />
                <HeaderButtons />
              </Box>
            </Container>
          </Toolbar>
        </AppBar>
      </Slide>
    </ElevationScroll>
  );
}

export default Header;
