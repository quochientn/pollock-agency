import { CheckCircleOutline } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardContent,
  Typography,
  styled,
  useTheme,
} from "@mui/material";

const StyledListOptionFeatures = styled("ul")`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1rem;
  padding-left: 0;
`;

const options = [
  {
    name: "basic",
    monthlyPrice: 19,
    annualPrice: 182,
    description:
      "Best for new startups or businesses with occasional in-person sales",
    features: [
      "Unlimited editable boards",
      "Unlimited visitors",
      "Custom templates",
      "Account management",
      "24/7 Support Online",
    ],
  },
  {
    name: "professional",
    monthlyPrice: 39,
    annualPrice: 374,
    description:
      "Best for new startups or businesses with occasional in-person sales",
    features: [
      "Unlimited editable boards",
      "Unlimited visitors",
      "Custom templates",
      "Account management",
      "24/7 Support Online",
    ],
  },
];

function PricingOptions({ annualPrice }) {
  const theme = useTheme();

  return (
    <Box
      display="flex"
      flexDirection={{ md: "row", xs: "column" }}
      gap={6}
      mt={2}
      sx={{
        [theme.breakpoints.up("md")]: {
          position: "absolute",
          top: "calc(100% + 6rem)",
          transform: "translateY(-50%)",
          flexDirection: "row",
        },
      }}
      // sx={{
      //   position: "absolute",
      //   top: "calc(100% + 6rem)",
      //   transform: "translateY(-50%)",
      // }}
    >
      {options.map((option) => (
        <Card
          variant="outlined"
          sx={{
            borderRadius: "1.25rem",
            border:
              "1px solid (rgba(97, 119, 152, 0.20), rgba(97, 119, 152, 0.20))",
          }}
        >
          <CardContent>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              gap={2}
              py={2}
              px={6}
            >
              <Typography
                variant="headline4"
                color="var(--color-action-blue)"
                textTransform="capitalize"
              >
                {option.name}
              </Typography>

              <Typography
                color="pollockText.heading"
                sx={{
                  typography: {
                    sm: "headline2",
                    xs: "headline3",
                  },
                }}
              >
                $
                <Typography variant="display2">
                  {annualPrice ? option.annualPrice : option.monthlyPrice}
                </Typography>
                /{annualPrice ? "yr" : "mo"}
              </Typography>

              <Typography variant="paragraph2" color="pollockText.text">
                {option.description}
              </Typography>

              <StyledListOptionFeatures>
                {option.features.map((feature) => (
                  <li>
                    <Box display="flex" alignItems="center" gap={1}>
                      <CheckCircleOutline
                        sx={{ color: "pollockAction.blue" }}
                      />
                      <Typography
                        color="pollockText.heading"
                        textAlign="left"
                        paragraph
                        mb={0}
                        sx={{
                          typography: { md: "headline3", xs: "headline4" },
                        }}
                      >
                        {feature}
                      </Typography>
                    </Box>
                  </li>
                ))}
              </StyledListOptionFeatures>

              <Button variant="buttonBig" sx={{ marginTop: "2.5rem" }}>
                Start your free trial
              </Button>
            </Box>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}

export default PricingOptions;
