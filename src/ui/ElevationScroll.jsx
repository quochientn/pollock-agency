import { useScrollTrigger } from "@mui/material";

import React from "react";

function ElevationScroll({ children }) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 3 : 0,
  });
}

export default ElevationScroll;
