import { Box } from "@mui/material";
import React from "react";
import CardComponent from "../components/Card";

import { bookDetails } from "../constants";

const Books = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: {
          xs: "center",
          sm: "space-evenly",
          md: "space-between",
        },
        alignItems: "center",
        px: { xs: "0", sm: "1rem" },
        pt: "2rem",
      }}
    >
      {bookDetails.map((item: any) => (
        <CardComponent key={item.id} item={item} />
      ))}
    </Box>
  );
};

export default Books;
