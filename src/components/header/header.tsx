import { Button, Container, Grid, Typography, Paper } from "@mui/material";
import { WhiteText } from "../../appStyles";
import HeaderBg from "../../assets/images/header-bg.jpg";
import HeaderImg from "../../assets/images/header-img.png";
import { HomeHeaderImage } from "./headerStyles";

const HomeHeader = () => {
  return (
    <>
      <Paper sx={{ padding: "6rem 0px", backgroundImage: `url(${HeaderBg})` }}>
        <Container maxWidth="lg">
          <Grid container>
            <Grid item lg={6} xs={12}>
              <Typography>Test</Typography>
              <WhiteText>Test</WhiteText>
              <Button variant="contained">Test</Button>
            </Grid>
            <Grid item lg={6} xs={12}>
              <HomeHeaderImage src={HeaderImg} />
              <Typography>Test</Typography>
              <Typography>Test</Typography>
            </Grid>
          </Grid>
        </Container>
      </Paper>
    </>
  );
};

export { HomeHeader };
