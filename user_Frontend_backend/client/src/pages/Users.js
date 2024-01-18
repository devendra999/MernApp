import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Button, ButtonGroup } from "@mui/material";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import Title from "../components/Title";

const Users = () => {
  const [users, setusers] = useState();

  const getUsers = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/users/");
      setusers(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUser = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:8000/api/users/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, [users]);

  return (
    <>
      <Box className="container">
        <Title text="All Users" />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead className="thead">
              <TableRow>
                <TableCell>
                  <b>Name</b>
                </TableCell>
                <TableCell>
                  <b>Username</b>
                </TableCell>
                <TableCell>
                  <b>Email</b>
                </TableCell>
                <TableCell>
                  <b>Phone</b>
                </TableCell>
                <TableCell>
                  <b>Action</b>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users ? (
                users.map((user) => {
                  return (
                    <TableRow
                      key={user?._id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="user">
                        {user?.name}
                      </TableCell>
                      <TableCell>{user?.username}</TableCell>
                      <TableCell>{user?.email}</TableCell>
                      <TableCell>{user?.phone}</TableCell>
                      <TableCell>
                        <ButtonGroup
                          variant="contained"
                          aria-label="outlined primary button group"
                        >
                          <Link to={`user/${user?._id}`}>
                            <Button>
                              <VisibilityOutlinedIcon />
                            </Button>
                          </Link>
                          <Link to={`edit/${user?._id}`}>
                            <Button>
                              <ModeEditOutlineOutlinedIcon />
                            </Button>
                          </Link>
                          <Link>
                            <Button onClick={() => deleteUser(user?._id)}>
                              <DeleteOutlineOutlinedIcon />
                            </Button>
                          </Link>
                        </ButtonGroup>
                      </TableCell>
                    </TableRow>
                  );
                })
              ) : (
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>There is no more users</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <Link to="/add">
          <Button color="secondary" className="add-btn" variant="contained">
            <AddOutlinedIcon />
          </Button>
        </Link>
      </Box>
    </>
  );
};

export default Users;
