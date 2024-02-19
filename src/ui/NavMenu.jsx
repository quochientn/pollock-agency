import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Box,
  Button,
  Drawer,
  IconButton,
  styled,
  useTheme,
} from "@mui/material";
import { MenuOutlined } from "@mui/icons-material";

const pages = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "About", path: "/about" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

const StyledListMenu = styled("ul")`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 2rem;
  padding-left: 0;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    text-decoration: none;
    font-size: 0.9375rem;
    font-weight: 500;
    line-height: 1.6;
    text-transform: uppercase;
    color: var(--color-text-text);
  }

  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-text-heading);
    position: relative;

    &::before {
      content: "";
      border-radius: 50%;
      position: absolute;
      top: -15px;
      left: 40%;
      border: 5px solid var(--color-action-green);
    }
  }
`;

function NavMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();

  const handleClick = () => {
    setIsOpen((open) => !open);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Box component="nav">
        <StyledListMenu
          sx={{
            [theme.breakpoints.down("md")]: {
              display: "none",
            },
          }}
        >
          {pages.map((page) => (
            <li key={page.name}>
              <StyledNavLink to={page.path} onClick={handleClose}>
                {page.name}
              </StyledNavLink>
            </li>
          ))}
        </StyledListMenu>
      </Box>

      <Box display={{ md: "none" }}>
        <IconButton onClick={handleClick}>
          <MenuOutlined sx={{ color: "pollockText.text", fontSize: "2rem" }} />
        </IconButton>
      </Box>

      <Drawer open={isOpen} onClose={handleClose} anchor="right">
        <Box display="flex" flexDirection="column" gap={2} px={4} my="auto">
          <StyledListMenu sx={{ flexDirection: "column" }}>
            {pages.map((page) => (
              <li key={page.name}>
                <StyledNavLink to={page.path}>{page.name}</StyledNavLink>
              </li>
            ))}
          </StyledListMenu>
          <Button variant="buttonBig">Sign up</Button>
        </Box>
      </Drawer>
    </>
  );
}

export default NavMenu;
