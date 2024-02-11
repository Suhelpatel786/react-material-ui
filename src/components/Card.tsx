import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";
import { book1 } from "../assets";
import { useParams } from "react-router-dom";

interface cardProps {
  item?: any;
  navigateFunction: any;
}

export default function ActionAreaCard({ item, navigateFunction }: cardProps) {
  return (
    <Card
      sx={{
        minWidth: { xs: 300, md: 345 },
        maxWidth: { xs: 300, md: 345 },
        mb: { xs: "1rem", sm: "3rem", md: "5rem" },
      }}
      onClick={navigateFunction}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          image={item.img}
          sx={{
            objectFit: "cover",
            objectPosition: "center",
            minHeight: 341,
            maxHeight: 341,
          }}
          alt="green iguana"
        />
        <CardContent>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              alignItems: "start",
              justifyContent: "center",
            }}
          >
            <Typography
              gutterBottom
              variant="h5"
              sx={{ fontWeight: "600" }}
              component="div"
            >
              {item?.name?.length >= 17
                ? item?.name?.substr(0, 18) + "..."
                : item?.name}
            </Typography>
            <Typography
              gutterBottom
              variant="body1"
              sx={{ fontWeight: "600" }}
              component="div"
            >
              {item?.author}
            </Typography>
            <Typography
              gutterBottom
              variant="body2"
              sx={{ fontWeight: "600" }}
              component="div"
            >
              {item?.price}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
