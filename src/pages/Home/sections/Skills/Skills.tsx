import { Box, Typography, LinearProgress, Grid } from "@mui/material";

const Skills = () => {
  const skills = [
    { name: "JavaScript", level: 80 },
    { name: "TypeScript", level: 70 },
    { name: "React", level: 75 },
    { name: "Java (Spring Boot)", level: 65 },
    { name: "Inglês", level: 85 }, // Intermediário-Avançado
  ];

  return (
    <Box sx={{ padding: "2rem", backgroundColor: "#1f1f1f", color: "#fff" }}>
      <Typography variant="h3" align="center" gutterBottom>
        Skills
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {skills.map((skill, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Typography variant="h6">{skill.name}</Typography>
            <LinearProgress
              variant="determinate"
              value={skill.level}
              sx={{
                height: 10,
                backgroundColor: "#2c2c2c",
                "& .MuiLinearProgress-bar": {
                  backgroundColor: "#4E5ABE",
                },
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Skills;
