import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Title from "../components/Title";

const EditUser = ({ InputLabelProps = {} }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const getUser = async () => {
    try {
      const res = await axios.get(`http://localhost:8000/api/users/${id}`);
      reset(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await axios.put(`http://localhost:8000/api/users/${id}`, data);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box className="container">
      <Title text={`Edit User`} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box style={{ marginBottom: "2rem" }}>
          <TextField
            label="Name"
            type="text"
            variant="outlined"
            InputLabelProps={{ ...InputLabelProps, shrink: true }}
            fullWidth
            {...register("name")}
          />
        </Box>
        <Box style={{ marginBottom: "2rem" }}>
          <TextField
            label="Username"
            type="text"
            InputLabelProps={{ ...InputLabelProps, shrink: true }}
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
            InputLabelProps={{ ...InputLabelProps, shrink: true }}
            fullWidth
            {...register("email")}
          />
        </Box>
        <Box style={{ marginBottom: "2rem" }}>
          <TextField
            label="Phone"
            type="number"
            InputLabelProps={{ ...InputLabelProps, shrink: true }}
            variant="outlined"
            fullWidth
            {...register("phone")}
          />
        </Box>
        <Box style={{ marginBottom: "2rem" }}>
          <TextField
            label="Website"
            type="text"
            InputLabelProps={{ ...InputLabelProps, shrink: true }}
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

export default EditUser;
