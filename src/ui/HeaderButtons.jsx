import { Box, Button, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function HeaderButtons() {
  return (
    <Box display={{ md: "flex", xs: "none" }} alignItems="center" gap={2}>
      <IconButton size="medium">
        <SearchIcon sx={{ color: "pollockText.text", fontSize: "1.5rem" }} />
      </IconButton>
      <Button variant="buttonBig">Sign up</Button>
    </Box>
  );
}

export default HeaderButtons;
