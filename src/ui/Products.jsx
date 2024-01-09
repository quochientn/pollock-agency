import { Box, Button, Container, SvgIcon, Typography } from "@mui/material";
import Grid from "@mui/system/Unstable_Grid/Grid";
import GradientBackground from "./GradientBackground";

function Products() {
  return (
    <Box
      component="section"
      py={12}
      sx={{ backgroundColor: "pollockBackground.lightAlt" }}
    >
      <Container maxWidth="lg">
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap={4}
          textAlign="center"
          mb={8}
        >
          <Typography
            variant="display3"
            color="pollockText.heading"
            component="h3"
          >
            Digital products that people love to use
          </Typography>

          <Typography variant="paragraph1" color="pollockText.text" paragraph>
            Applying behavioral science to customer experience
          </Typography>
        </Box>

        <Grid container rowSpacing={18} columnSpacing={2} alignItems="center">
          <Grid md={6}>
            <GradientBackground option="web3">
              <img
                src="/profile-card.png"
                alt="Profile card"
                className="products__web3 products__web3--profile-card"
              />
              <img
                src="/web3-design.jpg"
                alt="Web3 design"
                className="products__web3 products__web3--design"
              />
            </GradientBackground>
          </Grid>
          <Grid md={6}>
            <Typography
              variant="headline2"
              color="pollockText.heading"
              paragraph
            >
              Web3 Experience Design
            </Typography>

            <Typography
              variant="paragraph1"
              color="pollockText.text"
              paragraph
              mb={6}
            >
              In the new digital era, users are in control of content and
              community, and experience design is essential.
            </Typography>

            <Grid container columns={12} columnSpacing={2} rowSpacing={2}>
              <Grid lg={1}>
                <SvgIcon fontSize="large">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <path
                      d="M25.868 21.2C25.95 20.88 26 20.546 26 20.2V11.2C26 8.99395 24.206 7.19995 22 7.19995H10C7.794 7.19995 6 8.99395 6 11.2V20.2C6 20.546 6.048 20.88 6.132 21.2H25.868ZM9.2 11.2C9.2 10.758 9.558 10.4 10 10.4H22C22.442 10.4 22.8 10.758 22.8 11.2V20.2C22.8 20.642 22.442 21 22 21H10C9.558 21 9.2 20.642 9.2 20.2V11.2Z"
                      fill="var(--color-action-purple)"
                    />
                    <path
                      d="M26.7999 20.6001H4.9999C4.11625 20.6001 3.3999 21.3164 3.3999 22.2001C3.3999 23.0838 4.11625 23.8001 4.9999 23.8001H26.7999C27.6836 23.8001 28.3999 23.0838 28.3999 22.2001C28.3999 21.3164 27.6836 20.6001 26.7999 20.6001Z"
                      fill="var(--color-action-pink)"
                    />
                  </svg>
                </SvgIcon>
              </Grid>
              <Grid lg={11}>
                <Typography
                  variant="headline4"
                  color="pollockText.heading"
                  paragraph
                >
                  Design & Development Systems
                </Typography>
                <Typography
                  variant="paragraph2"
                  color="pollockText.text"
                  paragraph
                >
                  Chat, start meetings or join them with a click from within
                  your conversation.
                </Typography>
              </Grid>

              <Grid lg={1}>
                <SvgIcon fontSize="large">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <path
                      d="M14.442 7.9939H11.642C10.7583 7.9939 10.042 8.71024 10.042 9.5939V20.4139C10.042 21.2976 10.7583 22.0139 11.642 22.0139H14.442C15.3256 22.0139 16.042 21.2976 16.042 20.4139V9.5939C16.042 8.71024 15.3256 7.9939 14.442 7.9939Z"
                      fill="var(--color-action-pink)"
                    />
                    <path
                      d="M22.1981 12.864H19.3981C18.5144 12.864 17.7981 13.5804 17.7981 14.464V20.414C17.7981 21.2977 18.5144 22.014 19.3981 22.014H22.1981C23.0818 22.014 23.7981 21.2977 23.7981 20.414V14.464C23.7981 13.5804 23.0818 12.864 22.1981 12.864Z"
                      fill="var(--color-action-pink)"
                    />
                    <path
                      d="M25.706 23.89H8.08795V6.29995C8.08795 5.41595 7.37195 4.69995 6.48795 4.69995H6.29995C5.41595 4.69995 4.69995 5.41595 4.69995 6.29995V25.7C4.69995 26.584 5.41595 27.3 6.29995 27.3H6.48795C6.57395 27.3 6.65795 27.292 6.74195 27.278H25.706C26.59 27.278 27.306 26.562 27.306 25.678V25.49C27.306 24.606 26.59 23.89 25.706 23.89Z"
                      fill="var(--color-action-purple)"
                    />
                  </svg>
                </SvgIcon>
              </Grid>
              <Grid lg={11}>
                <Typography
                  variant="headline4"
                  color="pollockText.heading"
                  paragraph
                >
                  Digital Growth Strategy
                </Typography>
                <Typography
                  variant="paragraph2"
                  color="pollockText.text"
                  paragraph
                >
                  Chat, start meetings or join them with a click from within
                  your conversation.
                </Typography>
              </Grid>

              <Grid lg={1}>
                <SvgIcon fontSize="large">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <path
                      d="M11.3038 16H20.6978C22.4638 16 23.8978 17.434 23.8978 19.2V25.7C23.8978 26.584 23.1818 27.3 22.2978 27.3H9.70376C8.81976 27.3 8.10376 26.584 8.10376 25.7V19.2C8.10376 17.434 9.53776 16 11.3038 16Z"
                      fill="var(--color-action-purple)"
                    />
                    <path
                      d="M16.0021 15.244C18.9005 15.244 21.2501 12.8944 21.2501 9.99605C21.2501 7.09766 18.9005 4.74805 16.0021 4.74805C13.1038 4.74805 10.7542 7.09766 10.7542 9.99605C10.7542 12.8944 13.1038 15.244 16.0021 15.244Z"
                      fill="var(--color-action-pink)"
                    />
                  </svg>
                </SvgIcon>
              </Grid>
              <Grid lg={11}>
                <Typography
                  variant="headline4"
                  color="pollockText.heading"
                  paragraph
                >
                  User Journey Mapping
                </Typography>
                <Typography
                  variant="paragraph2"
                  color="pollockText.text"
                  paragraph
                >
                  Chat, start meetings or join them with a click from within
                  your conversation.
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid md={6}>
            <Typography
              variant="headline2"
              color="pollockText.heading"
              paragraph
            >
              We create world-class products
            </Typography>

            <Typography variant="paragraph1" color="pollockText.text" paragraph>
              We're a web design agency creating next‑level websites by
              strategically blending user experience and brand storytelling.
              <br />
              <br />
              Our full‑stack design and development agency based in San
              Francisco provides front‑end and back‑end development services
              working closely with our designers. As a UX UI and app development
              company, we build native mobile apps for iOS and Android, web
              applications, apps for wearables, and B2B/enterprise software.
            </Typography>

            <Button variant="buttonBig" sx={{ marginTop: "2.5rem" }}>
              Discover now
            </Button>
          </Grid>
          <Grid md={6}>
            <Box display="flex" justifyContent="flex-end">
              <GradientBackground option="product">
                <img
                  src="chart-1.png"
                  alt="Chart 1"
                  className="products__product products__product--chart-1"
                />
                <img
                  src="chart-2.png"
                  alt="Chart 2"
                  className="products__product products__product--chart-2"
                />
              </GradientBackground>
            </Box>
          </Grid>

          <Grid md={6}>
            <GradientBackground option="design">
              <img
                src="gradient-bg2.jpg"
                alt="Gradient background"
                className="products__design products__design--gradient"
              />
              <img
                src="chart-3.png"
                alt="Chart 3"
                className="products__design products__design--chart-3"
              />
            </GradientBackground>
          </Grid>
          <Grid md={6}>
            <Typography
              variant="headline2"
              color="pollockText.heading"
              paragraph
            >
              UI/UX design and branding agency
            </Typography>

            <Typography variant="paragraph1" color="pollockText.text" paragraph>
              We start each new digital product design partnership with an
              in‑depth discovery phase to immerse ourselves in your business.
              Our UX/UI designers interview stakeholders, conduct user research,
              analyze your competition, and consolidate content.
              <br />
              <br />
              The result is an action plan on executing a holistic brand and
              user experience.
            </Typography>

            <Button variant="buttonBig" sx={{ marginTop: "2.5rem" }}>
              Our services
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Products;
