import { Box, Card, CardContent, Typography } from "@mui/material";

function StyledCard({ icon, title, subTitle }) {
  return (
    <Card
      variant="outlined"
      sx={{
        borderRadius: "1.25rem",
        border:
          "1px solid (rgba(97, 119, 152, 0.20), rgba(97, 119, 152, 0.20))",
        "&:hover": {
          border: "1px solid transparent",
          boxShadow: "0px 20px 50px 0px rgba(79, 119, 255, 0.20)",
        },
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
          {icon}
          <Typography variant="headline3" color="pollockText.heading" paragraph>
            {title}
          </Typography>
          <Typography
            variant="paragraph2"
            color="pollockText.text"
            align="center"
            mb={0}
            pt={1}
            paragraph
          >
            {subTitle}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

export default StyledCard;
