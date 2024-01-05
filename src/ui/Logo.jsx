import { Typography, Box } from "@mui/material";

function Logo({ light = false }) {
  return (
    <Box display="flex" alignItems="center" gap={1}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="44"
        viewBox="0 0 32 44"
        fill="none"
      >
        <g clip-path="url(#clip0_202_755)">
          <path
            d="M32 16C32 11.7565 30.3143 7.68687 27.3137 4.68629C24.3131 1.68571 20.2435 0 16 0C11.7565 0 7.68687 1.68571 4.68629 4.68629C1.68571 7.68687 0 11.7565 0 16C0 16.2133 3.91006e-07 16.4267 0.0170671 16.64V16H16.0171V32C20.2576 31.9955 24.3229 30.3078 27.3197 27.3077C30.3166 24.3076 32 20.2405 32 16Z"
            fill="#61DCDF"
          />
          <path
            d="M0 17V44H16V32.3071H15.9872C11.8545 32.3071 7.88218 30.7135 4.90207 27.8602C1.92197 25.0069 0.165306 21.1151 0 17Z"
            fill="#886CFF"
          />
          <path
            d="M0 16V16.64C0.165262 20.7693 1.92146 24.6746 4.90077 27.5378C7.88007 30.401 11.8514 32 15.9829 32H16V16H0Z"
            fill="#F9E492"
          />
        </g>
        <defs>
          <clipPath id="clip0_202_755">
            <rect width="32" height="44" fill="white" />
          </clipPath>
        </defs>
      </svg>

      <Typography
        color={light ? "pollockText.textWhite" : "pollockText.heading"}
        sx={{
          fontSize: "1.5rem",
          fontWeight: 600,
          lineHeight: 1.333,
        }}
      >
        Pollock
      </Typography>
    </Box>
  );
}

export default Logo;
