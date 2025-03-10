import { AppBar, MenuItem, styled, Toolbar } from "@mui/material"
import { Link as RouterLink } from "react-router-dom";
import BuildIcon from "@mui/icons-material/Build";
import PersonIcon from "@mui/icons-material/Person";
import FolderIcon from "@mui/icons-material/Folder";

const NavBar=() => {

    const StyledToolbar = styled(Toolbar)(()=>({
       display: 'flex',
         justifyContent: 'space-evenly',
    
    }))
    const Styledlink = styled(RouterLink)(()=>({
        color: 'white',
        textDecoration: 'none'
    }))
    

    return (
      <>
        <AppBar position="absolute">
            <StyledToolbar>
            <Styledlink to="/about">
          <MenuItem>
          <PersonIcon sx={{ marginRight: "0.5rem" }} />
          About</MenuItem>
        </Styledlink>
          <Styledlink to="/skills">
          <MenuItem>
          <BuildIcon sx={{ marginRight: "0.5rem" }} /> 
          Skills</MenuItem>
        </Styledlink>
        <Styledlink to="/projects">
          <MenuItem>
          <FolderIcon sx={{ marginRight: "0.5rem" }} />
          Projects</MenuItem>
        </Styledlink>
              </StyledToolbar>
            </AppBar>
      </>
    );
  };
  
  export default NavBar