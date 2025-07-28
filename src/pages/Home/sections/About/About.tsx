import { Box, Container, Typography, Avatar, Grid, Button, styled } from "@mui/material";
import { GitHub, LinkedIn, Email } from "@mui/icons-material";
import me from "../../../../assets/images/me.jpeg";
import MatrixBackground from "../../../../assets/components/AnimatedBackground/MatrixBackground";
const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: 150,
  height: 150,
  margin: "0 auto",
  border: `3px solid ${theme.palette.secondary.main}`,
}));

const educationData = [
  { title: "Systems Analysis and Development (ADS)", subtitle: "Uninter-International University Center.", year: "2024 - Present" },
  { title: "Inglês basico intermediario  ", subtitle: "EDUC- Espaço e Cultura do Ceará.", year: "2014 - 2017" },
  { title: "Inglês intermediario Avançado ", subtitle: "IFCE- Campus Acaraú.", year: "2017 - 2018" },
  { title: "(IOT) Internet of things basico", subtitle: "UNICV", year: "2021 - 2022" },
  { title: "Level High School", subtitle: "EEMTI - Valdo de Vasconcelos Rios", year: "2010 - 2012" },

];


const About = () => {
  return (
    <Box sx={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}>
      <MatrixBackground />

      <Box
        sx={{
          backgroundColor: "rgba(31, 31, 31, 0.9)",
          padding: "4rem 0",
          minHeight: "100vh",
          position: "relative",
          zIndex: 1,
        }}
      >
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

          {/* Botões */}
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
              <Button variant="contained" color="secondary" href="mailto:seu-email@gmail.com" startIcon={<Email />}>
                Email
              </Button>
            </Grid>
          </Grid>

          {/* Seção de Educação */}
          <Box sx={{ marginTop: "3rem" }}>
            <Typography variant="h4" color="primary.contrastText" gutterBottom>
              Education
            </Typography>
            <Box sx={{ borderBottom: "1px solid #444", marginBottom: "1rem" }} />
            {educationData.map((edu, index) => (
              <Grid container key={index} alignItems="center" justifyContent="space-between" sx={{ marginBottom: "1rem" }}>
                <Box>
                  <Typography variant="h6" color="primary.contrastText">
                    {edu.title}
                  </Typography>
                  <Typography variant="body2" color="gray">
                    {edu.subtitle}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    backgroundColor: "#292929",
                    color: "#fff",
                    padding: "0.5rem 1rem",
                    borderRadius: "8px",
                    fontSize: "14px",
                    "&:hover": {
                      backgroundColor: "#292929",
                      transform: "scale(1.05)",
                      boxShadow: "0px 0px 10px rgba(78, 90, 190, 0.8)",
                    },
                  }}
                >
                  {edu.year}
                </Box>
              </Grid>
            ))}
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default About;
