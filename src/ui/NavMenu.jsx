import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";
import { Box } from "@mui/material";

const pages = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "About", path: "/about" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

const StyledListMenu = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 30px;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    text-decoration: none;
    font-size: 0.9375rem;
    font-weight: 500;
    line-height: 1.6;
    text-transform: uppercase;
    color: #7b88a8;
  }

  &:active,
  &.active:link,
  &.active:visited {
    color: #2d3958;
  }
`;

function NavMenu() {
  return (
    <Box component="nav">
      <StyledListMenu>
        {pages.map((page) => (
          <li key={page.name}>
            <StyledNavLink to={page.path}>{page.name}</StyledNavLink>
            {/* <Link
              href={page.path}
              variant="link"
              color="pollockText.text"
              underline="none"
              sx={{ cursor: "pointer" }}
            >
              {page.name}
            </Link> */}
          </li>
        ))}
      </StyledListMenu>
    </Box>
  );
}

export default NavMenu;
