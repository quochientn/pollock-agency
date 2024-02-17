import { Box, Chip, Switch, Typography, styled } from "@mui/material";

const CustomSwitch = styled(Switch)(() => ({
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: "var(--color-action-green)",
  },
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: "var(--color-action-green)",
  },
}));

function SwitchOptions({ annualPrice, onChange }) {
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

      <Chip
        label="Save 20%"
        sx={{
          borderRadius: "5px",
          color: "var(--color-text-text-white)",
          backgroundColor: "var(--color-action-green)",
          typography: "paragraph3",
          position: "absolute",
          right: "-50%",
        }}
      />
    </Box>
  );
}

export default SwitchOptions;
