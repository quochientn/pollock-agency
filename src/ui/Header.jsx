import { Box } from "@mui/material";

import Logo from "./Logo";
import NavMenu from "./NavMenu";
import HeaderButtons from "./HeaderButtons";

function Header() {
  return (
    <Box
      component="header"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      my={2}
    >
      <Logo />
      <NavMenu />
      <HeaderButtons />
    </Box>
  );
}

export default Header;
