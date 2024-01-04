import { Box, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import StyledButton from "./StyledButton";

function HeaderButtons() {
  return (
    <Box display="flex" alignItems="center" gap={2}>
      <IconButton size="medium">
        <SearchIcon sx={{ color: "pollockText.text", fontSize: "1.5rem" }} />
      </IconButton>
      <StyledButton>Sign up</StyledButton>
    </Box>
  );
}

export default HeaderButtons;
