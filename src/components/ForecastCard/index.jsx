import { Avatar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export const ForecastCard = ({ data }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mr: "20px",
        mb: "10px",
        border: "2px solid #eeeeee",
        padding: "10px",
        cursor: "default",
      }}
    >
      <Typography variant="h5" sx={{ mb: "20px" }}>
        {data.date}
      </Typography>

      <Avatar
        src={data.day.condition.icon}
        alt={data.day.condition.text}
        variant="circle"
        sx={{ width: "50px", height: "50px" }}
      />

      <Typography variant="h5" sx={{ mb: "30px" }}>
        {data.day.maxtemp_c}&deg; C
      </Typography>

      <Typography variant="p">{data.day.condition.text}</Typography>
    </Box>
  );
};
