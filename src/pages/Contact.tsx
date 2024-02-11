import { Box, Button, FormControl, TextField, Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";

type ContactFieldProps = {
  name: string;
  email: string;
  detail: string;
  phone: string;
};
const Contact = () => {
  //getting useform fields
  const form = useForm<ContactFieldProps>({
    defaultValues: {
      name: "",
      email: "",
      detail: "",
      phone: "",
    },
  });

  const { handleSubmit, register, control, watch, formState } = form;
  const { errors } = formState;

  console.log({ errors });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Box
      sx={{
        width: { xs: "90%", sm: "70%", md: "50%" },
        mt: "2rem",
        px: "1.5rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <form
        style={{ width: "100%" }}
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <TextField
          sx={{ width: "100%", mt: "1rem" }}
          error={errors?.name?.message}
          id="outlined-basic"
          label="Name"
          variant="outlined"
          {...register("name", {
            required: { value: true, message: "Please enter your name" },
          })}
        />

        <Typography sx={{ fontSize: "16px", mt: "5px", color: "red" }}>
          {errors?.name?.message}
        </Typography>

        <TextField
          sx={{ width: "100%", mt: "1rem" }}
          error={errors?.email?.message}
          id="outlined-basic"
          type="email"
          label="Email"
          variant="outlined"
          {...register("email", {
            required: { value: true, message: "Please enter your email" },
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Please enter the valid email",
            },
          })}
        />

        <Typography sx={{ fontSize: "16px", mt: "5px", color: "red" }}>
          {errors?.email?.message}
        </Typography>

        <TextField
          // sx={{}}
          error={errors?.phone?.message}
          id="outlined-basic"
          type="number"
          label="Phone Number"
          sx={{ mt: "1rem", width: "100%" }}
          variant="outlined"
          {...register("phone", {
            required: {
              value: true,
              message: "Please enter your phone number",
            },
          })}
        />

        <Typography sx={{ fontSize: "16px", mt: "5px", color: "red" }}>
          {errors?.phone?.message}
        </Typography>

        <TextField
          sx={{ width: "100%", mt: "1rem" }}
          error={errors?.detail?.message}
          id="outlined-basic"
          type="text"
          label="Detail"
          multiline
          variant="outlined"
          {...register("detail", {
            required: {
              value: true,
              message: "Please enter your detail",
            },
          })}
        />

        <Typography sx={{ fontSize: "16px", mt: "5px", color: "red" }}>
          {errors?.detail?.message}
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            mt: "1rem",
          }}
        >
          <Button type="submit" variant="outlined">
            Submit
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default Contact;
