import { Box, Container } from "@mui/material";

import Logo from "./Logo";
import NavMenu from "./NavMenu";
import HeaderButtons from "./HeaderButtons";

function Header() {
  return (
    // <Box>
    <Container maxWidth="lg">
      <Box
        component="header"
        py={2}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        position="absolute"
        zIndex={1}
        width="1152px"
      >
        <Logo />
        <NavMenu />
        <HeaderButtons />
      </Box>
    </Container>
    // </Box>
  );
}

export default Header;
