import { Box, Button, Card, CardActions, CardContent, Grid, Typography } from "@mui/material";

const Projects = () => {
    const repos = [
        {
            id: 1,
            name: "project1",
            description: "description1",
            url: "https://github.com/Ronaldosdeltas/sapace_invaders",
            url: "https://ronaldosdeltas.github.io/sapace_invaders/"
        },
        {
            id: 2,
            name: "project2",
            description: "description1",
            url: "url1"
        }
    ]
    return(
        <Box sx={{ padding: "2rem", backgroundColor: "#1f1f1f" }}>
      <Typography variant="h3" color="primary.contrastText" align="center" gutterBottom>
        Projects
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {repos.map((repo) => (
          <Grid item xs={12} md={4} key={repo.id}>
            <Card sx={{ backgroundColor: "#2c2c2c", color: "#fff" }}>
              <CardContent>
                <Typography variant="h6">{repo.name}</Typography>
                <Typography variant="body2">{repo.description}</Typography>
              </CardContent>
                <CardActions>
              <Button
                  size="small"
                  color="secondary"
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on GitHub
                </Button>
                {repo.id === 1 && (
                <Button
                  size="small"
                  color="secondary"
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Deploy project
                </Button>
              )}
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};




export default Projects;
