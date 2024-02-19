import { KeyboardArrowUpOutlined } from "@mui/icons-material";
import { Box, Fab, Fade, useScrollTrigger } from "@mui/material";

function BackToTop() {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 200,
  });

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <Fade in={trigger}>
      <Box
        onClick={scrollToTop}
        sx={{
          position: "fixed",
          right: "1.5rem",
          bottom: "1.5rem",
          zIndex: 10,
        }}
      >
        <Fab
          sx={{
            backgroundColor: "pollockAction.blue",
            "&:hover": {
              backgroundColor: "var(--color-action-dark-blue)",
            },
          }}
        >
          <KeyboardArrowUpOutlined
            sx={{
              color: "pollockText.textWhite",
              fontSize: "1.8rem",
            }}
          />
        </Fab>
      </Box>
    </Fade>
  );
}

export default BackToTop;
