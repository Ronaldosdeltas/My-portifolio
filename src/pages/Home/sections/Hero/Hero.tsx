import { Box, Container, Grid, styled, Typography } from "@mui/material"
import Ronaldoss from "../../../../assets/images/Ronaldoss.jpg"
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import EmailIcon from '@mui/icons-material/Email';
import { Button } from '@mui/material';
import { AnimatedBackground } from "../../../../assets/components/AnimatedBackground/AnimatedBackground";

const Hero=() => {
  const StyledHero = styled("div")(({theme})=>({
    backgroundColor: theme.palette.primary.main,
    height: "100vh",
    display: "flex",
    alignItems: "center",
    position: "relative",


}))
  const StyledImg = styled("img")(({theme})=>({
    width: "70%",
    borderRadius: "50%",
    border: `1px solid ${theme.palette.secondary.contrastText}`,

}))

    return (
     
      
      <>
      <StyledHero>
                <Container maxWidth="lg">
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={5}>
                            <Box position="relative">
                                <Box position="absolute" width={"150%"} top={-100} right={0}>
                                    <AnimatedBackground />
                                </Box>
                                <Box position="relative" textAlign="center">
                                    <StyledImg src={Ronaldoss} />
                                </Box>
                            </Box>
                        </Grid>

        <Grid item xs={12} md={7} textAlign="center" zIndex={1}>
          <Typography color="primary.contrastText"variant="h2" pb={3}>Ronaldoss Santos</Typography>

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