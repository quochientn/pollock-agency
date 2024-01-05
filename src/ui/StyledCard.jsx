import { Box, Card, CardContent, Typography } from "@mui/material";

function StyledCard({ icon, title, subTitle }) {
  return (
    <Card
      variant="outlined"
      sx={{
        borderRadius: "20px",
        border:
          "1px solid (rgba(97, 119, 152, 0.20), rgba(97, 119, 152, 0.20))",
        "&:hover": {
          border: "none",
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
          <Typography variant="headline3" color="pollockText.heading">
            {title}
          </Typography>
          <Typography
            variant="paragraph2"
            color="pollockText.text"
            sx={{ paddingTop: "1.5rem", textAlign: "center" }}
          >
            {subTitle}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

export default StyledCard;
