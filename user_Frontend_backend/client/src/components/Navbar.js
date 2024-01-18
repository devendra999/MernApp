import { Box } from "@mui/system";
import React from "react";

const Navbar = () => {
  return <>
    <Box className="header" sx={{ bgcolor: 'primary.main' }}>
      <div className="container">
        <div className="header-box">
          <div className="logo">
            <h2>CRUD Apps</h2>
          </div>
          <nav>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Contacts</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </Box>
  </>;
};

export default Navbar;
