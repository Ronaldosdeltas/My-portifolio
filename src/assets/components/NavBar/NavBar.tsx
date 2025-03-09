import { AppBar, MenuItem, styled, Toolbar } from "@mui/material"
import { Link as RouterLink } from "react-router-dom";

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
          <MenuItem>About</MenuItem>
        </Styledlink>
          <Styledlink to="/skills">
          <MenuItem>Skills</MenuItem>
        </Styledlink>
        <Styledlink to="/projects">
          <MenuItem>Projects</MenuItem>
        </Styledlink>
              </StyledToolbar>
            </AppBar>
      </>
    );
  };
  
  export default NavBar