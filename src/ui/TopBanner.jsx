import { Box, Breadcrumbs, Link, SvgIcon, Typography } from "@mui/material";

function TopBanner({ title, page }) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      gap={4}
      sx={{
        width: "100%",
        height: "500px",
        backgroundColor: "pollockBackground.light",
        position: "relative",
      }}
      component="section"
    >
      <Typography
        variant="display3"
        color="pollockText.heading"
        component="h3"
        sx={{ textTransform: "capitalize" }}
      >
        {title}
      </Typography>
      <Breadcrumbs zIndex={1}>
        <Link
          underline="hover"
          href="/"
          variant="link"
          sx={{
            color: "pollockText.heading",
            cursor: "pointer",
          }}
        >
          Homepage
        </Link>
        <Typography variant="link" color="pollockText.text">
          {page}
        </Typography>
      </Breadcrumbs>

      <SvgIcon
        viewBox="0 0 490 500"
        sx={{
          width: 490,
          height: 500,
          position: "absolute",
          top: 0,
          right: 0,
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none">
          <g opacity="0.3" filter="url(#filter0_f_328_1006)">
            <path
              d="M961 165.891C961 371.281 790.644 537.782 580.5 537.782C370.356 537.782 200 371.281 200 165.891C200 -39.4986 370.356 -206 580.5 -206C790.644 -206 961 -39.4986 961 165.891Z"
              fill="var(--color-action-purple)"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_328_1006"
              x="0"
              y="-406"
              width="1161"
              height="1143.78"
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
                result="effect1_foregroundBlur_328_1006"
              />
            </filter>
          </defs>
        </svg>
      </SvgIcon>

      <SvgIcon
        viewBox="0 0 900 314"
        sx={{
          width: 900,
          height: 314,
          position: "absolute",
          bottom: 0,
          right: "10%",
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none">
          <g opacity="0.3" filter="url(#filter0_f_328_1008)">
            <path
              d="M700 450C700 588.071 588.071 700 450 700C311.929 700 200 588.071 200 450C200 311.929 311.929 200 450 200C588.071 200 700 311.929 700 450Z"
              fill="var(--color-action-blue)"
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

      <SvgIcon
        viewBox="0 0 1000 514"
        sx={{
          width: 1000,
          height: 514,
          position: "absolute",
          left: "-30%",
          bottom: 0,
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none">
          <g opacity="0.3" filter="url(#filter0_f_328_1008)">
            <path
              d="M700 450C700 588.071 588.071 700 450 700C311.929 700 200 588.071 200 450C200 311.929 311.929 200 450 200C588.071 200 700 311.929 700 450Z"
              fill="var(--color-action-blue)"
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

export default TopBanner;
