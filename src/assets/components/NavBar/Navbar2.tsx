import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#1f1f1f" }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Meu Portfólio
        </Typography>
        <Box>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/about">About</Button>
          <Button color="inherit" component={Link} to="/skills">Skills</Button>
          <Button color="inherit" component={Link} to="/projects">Projects</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
