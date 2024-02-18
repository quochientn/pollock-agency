import { Box, css, styled } from "@mui/material";

const StyledBackground = styled(Box)`
  ${(props) =>
    props.option === "web3" &&
    css`
      background: url("/gradient-bg.jpg"),
        lightgray -232px 0px / 270% 100% no-repeat;
      background-position: 30% 60%;
    `}

  ${(props) =>
    props.option === "product" &&
    css`
      background: url("/gradient-bg.jpg"),
        lightgray -2px 0px / 270% 100% no-repeat;
      background-position: 15% 70%;
    `}

  ${(props) =>
    props.option === "design" &&
    css`
      background: url("/gradient-bg.jpg"),
        lightgray -2px 0px / 270% 100% no-repeat;
      background-position: 80% 30%;
    `}

  border-radius: 1.25rem;
  width: 25rem;
  height: 45rem;
  position: relative;

  @media screen and (max-width: 900px) {
    width: 17rem;
    height: 30rem;
  }
`;

function GradientBackground({ option, children }) {
  return <StyledBackground option={option}>{children}</StyledBackground>;
}

export default GradientBackground;
