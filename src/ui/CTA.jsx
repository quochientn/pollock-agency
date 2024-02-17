import { Box, Button, Container, SvgIcon, Typography } from "@mui/material";

function CTA({ title, subTitle, buttonText }) {
  return (
    <Box
      component="section"
      py={12}
      sx={{ backgroundColor: "pollockBackground.light", position: "relative" }}
    >
      <Container maxWidth="lg">
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap={4}
          textAlign="center"
        >
          <Typography
            variant="display3"
            color="pollockText.heading"
            component="h3"
          >
            {title}
          </Typography>

          <Typography variant="headline3" color="pollockText.text" paragraph>
            {subTitle}
          </Typography>

          <Button variant="buttonBig" sx={{ marginTop: "2.5rem" }}>
            {buttonText}
          </Button>
        </Box>
      </Container>

      <SvgIcon
        viewBox="0 0 600 500"
        sx={{
          width: 600,
          height: 500,
          position: "absolute",
          bottom: 0,
          right: 0,
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none">
          <g opacity="0.3" filter="url(#filter0_f_328_1008)">
            <path
              d="M700 450C700 588.071 588.071 700 450 700C311.929 700 200 588.071 200 450C200 311.929 311.929 200 450 200C588.071 200 700 311.929 700 450Z"
              fill="var(--color-action-purple)"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_328_1008"
              x="0"
              y="0"
              width="900"
              height="900"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="100"
                result="effect1_foregroundBlur_328_1008"
              />
            </filter>
          </defs>
        </svg>
      </SvgIcon>
    </Box>
  );
}

export default CTA;
