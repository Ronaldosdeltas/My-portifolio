import { Box, Typography, CircularProgress, Grid } from "@mui/material";

const Skills = () => {
  const programmingSkills = [
    { name: "JavaScript", level: 80, image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" },
    { name: "TypeScript", level: 70, image: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" },
    { name: "React", level: 75, image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
    { name: "Java (Spring Boot)", level: 65, image: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg" },
  ];

  const languageSkills = [
    { name: "Inglês", level: 85, image: "https://cdn-icons-png.flaticon.com/512/197/197374.png" },
    { name: "Russo", level: 40, image: "https://cdn-icons-png.flaticon.com/512/197/197408.png" },
  ];

  return (
    <Box sx={{ padding: "2rem", backgroundColor: "#1f1f1f", color: "#fff", marginTop: "4rem" }}>
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
                width: 100,
                height: 100,
                borderRadius: "10px",
                backgroundImage: `url(${skill.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                transition: "0.3s",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0px 0px 10px rgba(78, 90, 190, 0.8)",
                },
              }}
            />
            <Box sx={{ textAlign: "center", marginTop: "0.5rem" }}>
              <Typography variant="h6">{skill.name}</Typography>
              <CircularProgress variant="determinate" value={skill.level} size={40} thickness={5} sx={{ color: "#4E5ABE" }} />
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
                width: 100,
                height: 100,
                borderRadius: "10px",
                backgroundImage: `url(${skill.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                transition: "0.3s",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0px 0px 10px rgba(78, 90, 190, 0.8)",
                },
              }}
            />
            <Box sx={{ textAlign: "center", marginTop: "0.5rem",}}>
              <Typography variant="h6">{skill.name}</Typography>
              <CircularProgress variant="determinate" value={skill.level} size={40} thickness={5} sx={{ color: "#4E5ABE" }} />
              <Typography variant="body2">{skill.level}%</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Skills;
