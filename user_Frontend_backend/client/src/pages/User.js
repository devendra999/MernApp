import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";

import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import { useParams } from "react-router-dom";
import Title from "../components/Title";
import { Box } from "@mui/material";

const User = () => {
  const [user, setuser] = useState();
  const { id } = useParams();
  console.log(id);

  const getUser = async () => {
    try {
      const res = await axios.get(`http://localhost:8000/api/users/${id}`);
      setuser(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(user);

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <Box className="container">
        <Title text={`View : ${user?.name}`} />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableBody>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <b>Name</b>
                </TableCell>
                <TableCell component="th" scope="row">
                  {user?.name}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <b>Username</b>
                </TableCell>
                <TableCell>{user?.username}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <b>Email</b>
                </TableCell>
                <TableCell>{user?.email}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <b>Phone</b>
                </TableCell>
                <TableCell>{user?.phone}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <b>Website</b>
                </TableCell>
                <TableCell>{user?.website}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default User;
