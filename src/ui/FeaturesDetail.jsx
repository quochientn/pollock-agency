import {
  BoltOutlined,
  InsertChartOutlined,
  LayersOutlined,
  RocketLaunchOutlined,
} from "@mui/icons-material";
import { Box, Button, Container, Typography } from "@mui/material";
import Grid from "@mui/system/Unstable_Grid/Grid";

import StyledCard from "./StyledCard";

const cardsContent = [
  {
    icon: (
      <RocketLaunchOutlined
        sx={{ color: "pollockAction.blue", fontSize: "3rem" }}
      />
    ),
    title: "Startups",
    subTitle:
      "From cultivating new ideas to connecting the dots for customers or users.",
  },
  {
    icon: (
      <LayersOutlined sx={{ color: "pollockAction.blue", fontSize: "3rem" }} />
    ),
    title: "Development",
    subTitle:
      "From cultivating new ideas to connecting the dots for customers or users.",
  },
  {
    icon: (
      <InsertChartOutlined
        sx={{ color: "pollockAction.blue", fontSize: "3rem" }}
      />
    ),
    title: "Analytics",
    subTitle:
      "From cultivating new ideas to connecting the dots for customers or users.",
  },
  {
    icon: (
      <BoltOutlined sx={{ color: "pollockAction.blue", fontSize: "3rem" }} />
    ),
    title: "Workflow",
    subTitle:
      "From cultivating new ideas to connecting the dots for customers or users.",
  },
];

function FeaturesDetail() {
  return (
    <Container maxWidth="lg" component="section" sx={{ py: "6rem" }}>
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
          An outstanding strategy, design, and development across all platforms
        </Typography>

        <Typography
          variant="paragraph1"
          color="pollockText.text"
          mb={1}
          paragraph
        >
          Share ideas, make decisions and move work forward with a common
          purpose and place
        </Typography>

        <Box display="flex" gap={10} mt={5}>
          <Grid container columnSpacing={4} rowSpacing={4}>
            {cardsContent.map((card) => (
              <Grid md={6} key={card.title}>
                <StyledCard
                  icon={card.icon}
                  title={card.title}
                  subTitle={card.subTitle}
                />
              </Grid>
            ))}
          </Grid>

          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            textAlign="left"
          >
            <Typography
              variant="headline2"
              color="pollockText.heading"
              paragraph
            >
              We fuel the growth of purpose driven brands through strategy
              design empowerment, and market adoption.
            </Typography>

            <Typography variant="paragraph1" color="pollockText.text" paragraph>
              With enterprise-ready security and administration controls, deploy
              Pollock company - wide with ease.
            </Typography>

            <Box>
              <Button variant="buttonBig" sx={{ marginTop: "2.5rem" }}>
                Get started
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default FeaturesDetail;
