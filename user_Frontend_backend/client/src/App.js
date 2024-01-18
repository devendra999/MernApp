import Navbar from "./components/Navbar";
import { ThemeProvider } from "@mui/system"; // theme purpose
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";
import User from "./pages/User";
import Users from "./pages/Users";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import theme from "./theme";
import { Button } from "@mui/material";

// Create a custom theme with a secondary color

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Users />} />
            <Route path="/user/:id" element={<User />} />
            <Route path="/add" element={<AddUser />} />
            <Route path="/edit/:id" element={<EditUser />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
