import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { bookDetails } from "../constants";
import { Box, Typography } from "@mui/material";
const BooksDetails = () => {
  const { id }: any = useParams();
  const [data, setData] = useState<any>([]);

  //filterring book details
  useEffect(() => {
    setData(bookDetails?.filter((item: any) => item?.id === parseInt(id)));
  }, []);

  console.log(data);

  return (
    <Box sx={{ mt: "2rem", px: { xs: "2rem" } }}>
      {/* taking it in center  */}
      <Box
        sx={{
          display: "flex",
          width: "100%",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* image */}
        <Box
          width={{ xs: "300px", sm: "450px", md: "600px" }}
          height={{ xs: "450px", sm: "500px", md: "500px" }}
          // sx={{ objectFit: "covr" }}
        >
          <img
            style={{ objectFit: "cover", objectPosition: "center" }}
            src={data[0]?.img}
            width={"100%"}
            height={"100%"}
            alt="book-image"
          />
        </Box>

        {/* book detail  */}
        <Box
          mt={"1.5rem"}
          textAlign={"left"}
          width={{ xs: "300px", sm: "450px", md: "600px" }}
        >
          <Typography
            variant="body1"
            sx={{ fontWeight: "550", fontSize: "25px" }}
          >
            {data[0]?.name}
          </Typography>

          <Typography
            mt={"10px"}
            variant="body1"
            fontWeight={"400"}
            fontSize={"20px"}
          >
            {data[0]?.author}
          </Typography>
          <Typography
            mt={"10px"}
            variant="body1"
            fontWeight={"450"}
            fontSize={"20px"}
          >
            {data[0]?.price}
          </Typography>

          <Typography
            mt={"10px"}
            mb={"20px"}
            variant="body1"
            fontWeight={"400"}
            fontSize={"22px"}
          >
            {data[0]?.detail}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default BooksDetails;
