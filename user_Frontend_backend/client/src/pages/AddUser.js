import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Title from "../components/Title";

const AddUser = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    const res = await axios.post("http://localhost:8000/api/users/add", data);
    navigate("/");
  };

  // console.log(watch("example"));

  return (
    <Box className="container">
      <Title text="Add new user" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box style={{ marginBottom: "2rem" }}>
          <TextField
            label="Name"
            type="text"
            variant="outlined"
            fullWidth
            {...register("name")}
          />
        </Box>
        <Box style={{ marginBottom: "2rem" }}>
          <TextField
            label="Username"
            type="text"
            variant="outlined"
            fullWidth
            {...register("username")}
          />
        </Box>
        <Box style={{ marginBottom: "2rem" }}>
          <TextField
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
            {...register("email")}
          />
        </Box>
        <Box style={{ marginBottom: "2rem" }}>
          <TextField
            label="Phone"
            type="number"
            variant="outlined"
            fullWidth
            {...register("phone")}
          />
        </Box>
        <Box style={{ marginBottom: "2rem" }}>
          <TextField
            label="Website"
            type="text"
            variant="outlined"
            fullWidth
            {...register("website")}
          />
        </Box>
        <Box>
          <Button type="submit" variant="contained" fullWidth>
            Add User
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default AddUser;
