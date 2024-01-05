import { Box, Link, Typography } from "@mui/material";

function FooterList({ title, array }) {
  return (
    <>
      <Typography variant="headline3" color="pollockText.textWhite" paragraph>
        {title}
      </Typography>

      <Box
        component="ul"
        display="flex"
        flexDirection="column"
        gap={1}
        sx={{ listStyle: "none", paddingLeft: 0 }}
      >
        {array.map((element, index) => (
          <li>
            <Link
              key={index}
              href="#"
              underline="none"
              color="pollockText.textGrey"
              sx={{
                fontSize: "0.875rem",
                fontWeight: 500,
                lineHeight: 1.714,
                textTransform: "uppercase",
              }}
            >
              {element}
            </Link>
          </li>
        ))}
      </Box>
    </>
  );
}

export default FooterList;
