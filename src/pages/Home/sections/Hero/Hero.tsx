import { Container, Grid, styled, Typography } from "@mui/material"
import Ronaldoss from "../../../../assets/images/Ronaldoss.jpg"
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import EmailIcon from '@mui/icons-material/Email';
import { Button } from '@mui/material';


const Hero=() => {
  const StyledHero = styled("div")(({theme})=>({
    backgroundColor: theme.palette.primary.main,
    height: "100vh",
    display: "flex",
    alignItems: "center",

}))
  const StyledImg = styled("img")(({theme})=>({
    width: "80%",
    borderRadius: "50%",
    border: `1px solid ${theme.palette.secondary.contrastText}`,

}))

    return (
     
      
      <>
      <StyledHero>
        <Container maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={12} md={5}>
        <StyledImg src={Ronaldoss}/>
        </Grid>
        <Grid item xs={12} md={7}>
          <Typography color="primary.contrastText"variant="h2" textAlign="center">Ronaldoss Santos</Typography>

          <Grid container display= "flexbox" justifyContent= "center" spacing={2}>
            <Grid item xs={12} md={4} display= "flex" justifyContent="center">
            <Button color="secondary" variant="contained"><DownloadForOfflineIcon/>download cv</Button>
            </Grid>
            <Grid item xs={12} md={4} display= "flex" justifyContent="center">
            <Button color="secondary" variant="contained"><EmailIcon/>contact me</Button>
              </Grid>
          </Grid>



        </Grid>
      </Grid>
      </Container>
      </StyledHero>

   
      </>
    )
  }
  
  export default Hero