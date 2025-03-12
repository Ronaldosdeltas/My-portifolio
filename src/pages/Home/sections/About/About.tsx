import { Box, Container, Typography, Avatar, Grid, Button, styled } from "@mui/material";
import { GitHub, LinkedIn, Email } from "@mui/icons-material";
import React from "react";
import me from "../../../../assets/images/me.jpeg";
import MatrixBackground from "../../../../assets/components/AnimatedBackground/MatrixBackground";
const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: 150,
  height: 150,
  margin: "0 auto",
  border: `3px solid ${theme.palette.secondary.main}`
}));

const About = () => {
  return (
    <Box sx={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}>
    
    <MatrixBackground />

    <Box sx={{ backgroundColor: "rgba(31, 31, 31, 0.9)", padding: "4rem 0", minHeight: "100vh", position: "relative", zIndex: 1 }}>
    <Container maxWidth="md">
        <StyledAvatar src={me} alt="Your Name" />
        <Typography variant="h3" color="primary.contrastText" align="center" gutterBottom>
          About Me
        </Typography>
        <Typography
        
          variant="body1"
          color="primary.contrastText"
          align="center"
          paragraph
          sx={{ marginBottom: "2rem" }}
          
        >
          Olá! Eu sou Ronaldoss Santos, um desenvolvedor apaixonado por tecnologia e programação.
          Tenho experiência em desenvolvimento web utilizando React, TypeScript e Java Spring Boot.
          Adoro aprender novas tecnologias e resolver problemas desafiadores.
        </Typography>
        
        <Grid container justifyContent="center" spacing={2}>
          <Grid item>
            <Button
              variant="contained"
              color="secondary"
              href="https://github.com/Ronaldosdeltas"
              target="_blank"
              startIcon={<GitHub />}
            >
              GitHub
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="secondary"
              href="https://www.linkedin.com/in/ronaldoss-santos-3a9406325/"
              target="_blank"
              startIcon={<LinkedIn />}
            >
              LinkedIn
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="secondary"
              href="mailto:seu-email@gmail.com"
              startIcon={<Email />}
            >
              Email
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  </Box>
  );
};

export default About;
