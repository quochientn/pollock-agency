import { Box, Card, CardContent, Typography } from "@mui/material";
import shadows from "@mui/material/styles/shadows";
import {
  InsertChartOutlined,
  LayersOutlined,
  RocketLaunchOutlined,
} from "@mui/icons-material";
import StyledCard from "./StyledCard";

const cardsContent = [
  {
    icon: (
      <RocketLaunchOutlined
        sx={{ color: "pollockAction.blue", fontSize: "3rem" }}
      />
    ),
    title: "Branding",
    subTitle:
      "We design digital platforms to empower users and your brand's tribe.",
  },
  {
    icon: (
      <LayersOutlined sx={{ color: "pollockAction.blue", fontSize: "3rem" }} />
    ),
    title: "Development",
    subTitle:
      "We design digital platforms to empower users and your brand's tribe.",
  },
  {
    icon: (
      <InsertChartOutlined
        sx={{ color: "pollockAction.blue", fontSize: "3rem" }}
      />
    ),
    title: "Strategy",
    subTitle:
      "We design digital platforms to empower users and your brand's tribe.",
  },
];

function FeaturedCards() {
  return (
    <Box display="flex" gap={4}>
      {cardsContent.map((card) => (
        <StyledCard
          key={card.title}
          icon={card.icon}
          title={card.title}
          subTitle={card.subTitle}
        />
      ))}
    </Box>
  );
}

export default FeaturedCards;
