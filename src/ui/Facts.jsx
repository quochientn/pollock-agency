import { Box, Container, SvgIcon, useTheme } from "@mui/material";

import Fact from "./Fact";

const factsContent = [
  {
    number: "150+",
    title: "Happy Clients in 2023",
    subTitle:
      "Branding has never been more expansive, adventurous and agile than it is today",
  },
  {
    number: "89%",
    title: "Optimization Strategy",
    subTitle:
      "Branding has never been more expansive, adventurous and agile than it is today",
  },
  {
    number: "190%",
    title: "Increased Traffic",
    subTitle:
      "Branding has never been more expansive, adventurous and agile than it is today",
  },
];

function Facts() {
  const theme = useTheme();

  return (
    <Box
      bgcolor="pollockBackground.grey"
      component="section"
      py={12}
      position="relative"
    >
      <Container maxWidth="lg">
        <Box display="flex" flexDirection={{ sm: "row", xs: "column" }} gap={6}>
          {factsContent.map((fact) => (
            <Fact
              number={fact.number}
              title={fact.title}
              subTitle={fact.subTitle}
              key={fact.title}
            />
          ))}
        </Box>
      </Container>

      <SvgIcon
        viewBox="0 0 562 399"
        sx={{
          width: 562,
          height: 399,
          position: "absolute",
          top: 0,
          right: 0,
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none">
          <g opacity="0.3" filter="url(#filter0_f_328_1308)">
            <path
              d="M700 0C700 138.071 588.071 250 450 250C311.929 250 200 138.071 200 0C200 -138.071 311.929 -250 450 -250C588.071 -250 700 -138.071 700 0Z"
              fill="var(--color-action-blue)"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_328_1308"
              x="0"
              y="-450"
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
                result="effect1_foregroundBlur_328_1308"
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
          [theme.breakpoints.down("md")]: {
            display: "none",
          },
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

export default Facts;
