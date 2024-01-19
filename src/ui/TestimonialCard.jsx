import { Star } from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  SvgIcon,
  Typography,
  styled,
} from "@mui/material";

const StyledImg = styled("img")`
  width: 4.5rem;
  border-radius: 50%;
`;

function TestimonialCard({ src, name, job, comment }) {
  return (
    <Card
      sx={{
        borderRadius: "1.25rem",
        boxShadow: "0px 20px 50px 0px rgba(79, 119, 255, 0.20)",
      }}
    >
      <CardContent>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap={2}
          p={2}
        >
          <StyledImg src={src} alt="Client avatar" />
          <Typography
            variant="headline3"
            color="pollockText.heading"
            mb={0}
            paragraph
          >
            {name}
          </Typography>
          <Typography
            variant="paragraph2"
            color="pollockText.text"
            mb={0}
            mt={-1}
            paragraph
          >
            {job}
          </Typography>
          <Box>
            {Array.from({ length: 5 }, (_, i) => i).map((num) => (
              <SvgIcon sx={{ color: "var(--color-action-yellow)" }} key={num}>
                <Star />
              </SvgIcon>
            ))}
          </Box>
          <Typography
            variant="paragraph1"
            color="pollockText.text"
            align="center"
            paragraph
            mt={2}
          >
            {comment}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

export default TestimonialCard;
