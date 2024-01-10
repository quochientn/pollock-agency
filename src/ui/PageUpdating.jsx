import { Construction } from "@mui/icons-material";
import { Box, Icon, Typography } from "@mui/material";

function PageUpdating() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap={2}
      pt={20}
      sx={{ height: "50vh" }}
    >
      <Icon sx={{ width: "3rem", height: "3rem" }}>
        <Construction sx={{ color: "pollockText.heading", fontSize: "3rem" }} />
      </Icon>
      <Typography variant="headline3" color="pollockText.text" paragraph>
        This page is updating. Please comeback later!
      </Typography>
    </Box>
  );
}

export default PageUpdating;
