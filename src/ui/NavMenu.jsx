import { NavLink } from "react-router-dom";
import { Box, IconButton, styled } from "@mui/material";
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

  @media screen and (max-width: 900px) {
    display: none;
  }
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
  return (
    <>
      <Box component="nav">
        <StyledListMenu>
          {pages.map((page) => (
            <li key={page.name}>
              <StyledNavLink to={page.path}>{page.name}</StyledNavLink>
            </li>
          ))}
        </StyledListMenu>
      </Box>

      <Box display={{ md: "none" }}>
        <IconButton>
          <MenuOutlined sx={{ color: "pollockText.text", fontSize: "2rem" }} />
        </IconButton>
      </Box>
    </>
  );
}

export default NavMenu;
