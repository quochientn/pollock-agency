import { Box, Chip, Switch, Typography, styled, useTheme } from "@mui/material";

const CustomSwitch = styled(Switch)(() => ({
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: "var(--color-action-green)",
  },
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: "var(--color-action-green)",
  },
}));

function SwitchOptions({ annualPrice, onChange }) {
  const theme = useTheme();

  return (
    <Box
      display="flex"
      gap={2}
      alignItems="center"
      sx={{ position: "relative" }}
    >
      <Typography variant="paragraph1" color="pollockText.text">
        Monthly
      </Typography>
      <CustomSwitch checked={annualPrice} onChange={onChange} />
      <Typography variant="paragraph1" color="pollockText.text">
        Yearly
      </Typography>

      {annualPrice && (
        <Chip
          label="Save 20%"
          sx={{
            borderRadius: "5px",
            color: "var(--color-text-text-white)",
            backgroundColor: "var(--color-action-green)",
            typography: "paragraph3",
            position: "absolute",
            right: "-50%",
            [theme.breakpoints.down("sm")]: {
              right: 0,
              bottom: "-100%",
              transform: "translateX(40%)",
            },
          }}
        />
      )}
    </Box>
  );
}

export default SwitchOptions;
