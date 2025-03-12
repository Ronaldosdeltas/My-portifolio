import { Box, Typography, CircularProgress, Grid } from "@mui/material";

const Skills = () => {
  const programmingSkills = [
    { name: "JavaScript", level: 80 },
    { name: "TypeScript", level: 70 },
    { name: "React", level: 75 },
    { name: "Java (Spring Boot)", level: 65 },
  ];

  const languageSkills = [
    { name: "Inglês", level: 85 },
    { name: "Russo" , level: 40} // Intermediário-Avançado
  ];

  return (
    <Box sx={{ padding: "2rem", backgroundColor: "#1f1f1f", color: "#fff" }}>
      <Typography variant="h3" align="center" gutterBottom>
        Skills
      </Typography>

      {/* Seção de Linguagens de Programação */}
      <Typography variant="h5" gutterBottom>
        Linguagens de Programação
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {programmingSkills.map((skill, index) => (
          <Grid item xs={6} md={2} key={index}>
            <Box
              sx={{
                textAlign: "center",
                padding: "1rem",
                borderRadius: "10px",
                transition: "0.3s",
                "&:hover": {
                  backgroundColor: "#292929",
                  transform: "scale(1.05)",
                  boxShadow: "0px 0px 10px rgba(78, 90, 190, 0.8)",
                },
              }}
              >
              <CircularProgress
                variant="determinate"
                value={skill.level}
                size={80}
                thickness={5}
                sx={{ color: "#4E5ABE" }}
              />
              <Typography variant="h6" mt={1}>
                {skill.name}
              </Typography>
              <Typography variant="body2">{skill.level}%</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* Seção de Idiomas */}
      <Typography variant="h5" gutterBottom sx={{ marginTop: "2rem" }}>
        Idiomas
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {languageSkills.map((skill, index) => (
          <Grid item xs={6} md={2} key={index}>
            <Box
              sx={{
                textAlign: "center",
                padding: "1rem",
                borderRadius: "10px",
                transition: "0.3s",
                "&:hover": {
                  backgroundColor: "#292929",
                  transform: "scale(1.05)",
                  boxShadow: "0px 0px 10px rgba(78, 90, 190, 0.8)",
                },
              }}
            >
              <CircularProgress
                variant="determinate"
                value={skill.level}
                size={80}
                thickness={5}
                sx={{ color: "#4E5ABE" }}
              />
              <Typography variant="h6" mt={1}>
                {skill.name}
              </Typography>
              <Typography variant="body2">{skill.level}%</Typography>
            </Box>
            
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Skills;
