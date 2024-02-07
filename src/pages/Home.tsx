import { Box, Typography } from "@mui/material";
import React from "react";
import { homeImage } from "../assets";

const Home = () => {
  return (
    <Box className={"container"} sx={{ width: "100%", height: "100vh" }}>
      <img
        className="fixed-image"
        src={homeImage}
        width={"100%"}
        height={"100%"}
        alt="home image"
      />

      {/* heading part  */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          className="heading"
          variant="h1"
          sx={{
            fontWeight: "800",
            mt: "-10rem",
            fontSize: { xs: "35px", sm: "75px", md: "96px" },
            zIndex: 1,
            position: "relative",
          }}
        >
          Beyond Boundaries
        </Typography>
        <Typography
          variant="body1"
          className="text"
          sx={{
            fontWeight: "400",
            mt: "10px",
            fontSize: { xs: "16px", sm: "30px", md: "35px" },
            zIndex: 1,
            position: "relative",
          }}
        >
          Explore Infinite Worlds in Every Book
        </Typography>
      </Box>
    </Box>
  );
};

export default Home;
