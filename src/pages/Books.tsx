import { Box } from "@mui/material";
import React from "react";
import CardComponent from "../components/Card";

import { bookDetails } from "../constants";
import { useNavigate } from "react-router-dom";

const Books = () => {
  const navigate = useNavigate();

  const bookDetailpageHandler = (id: any) => {
    navigate(`/books/${id}`);
  };

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
        <CardComponent
          navigateFunction={() => bookDetailpageHandler(item.id)}
          key={item.id}
          item={item}
        />
      ))}
    </Box>
  );
};

export default Books;
