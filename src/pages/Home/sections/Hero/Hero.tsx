import { Container, Grid, styled, Typography } from "@mui/material"
import Ronaldoss from "../../../../assets/images/Ronaldoss.jpg"
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import EmailIcon from '@mui/icons-material/Email';

const Hero=() => {
  const StyledHero = styled("div")(({theme})=>({
    backgroundColor: theme.palette.secondary.contrastText,
    height: "100vh",

}))
  const StyledImg = styled("img")(()=>({
    width: "100%",
    borderRadius: "50%"

}))

    return (
     
      
      <>
      <StyledHero>
        <Container maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
        <StyledImg src={Ronaldoss}/>
        </Grid>
        <Grid item xs={12} md={8}>
          <Typography color="secundary.contrastText"variant="h2" textAlign="center">Ronaldoss Santos</Typography>

          <Grid container display= "flexbox" justifyContent= "center">
            <Grid item xs={12} md={2} display= "flex" justifyContent="center">
            <button><DownloadForOfflineIcon/>download cv</button>
            </Grid>
            <Grid item xs={12} md={2} display= "flex" justifyContent="center">
            <button><EmailIcon/>Contact me</button>
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