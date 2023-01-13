import { CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "./styles.css";

export const CenterredCircularProgress = () => {
  return (
    <Box className="vertical-centerring">
      <CircularProgress sx={{ color: "#eeeeee" }} />
    </Box>
  );
};
