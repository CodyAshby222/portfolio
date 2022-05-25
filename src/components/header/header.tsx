import { Button, Container, Grid, Typography, Paper } from "@mui/material";
import { RowCenter, WhiteText } from "../../appStyles";
import { HomeHeaderImage } from "./headerStyles";
const HeaderBg = require("../../assets/images/header-bg.jpg");
const HeaderImg = require("../../assets/images/header-img.png");

const HomeHeader = () => {
  return (
    <>
      <Paper sx={{ padding: "6rem 0px", backgroundImage: `url(${HeaderBg})` }}>
        <Container maxWidth="lg">
          <RowCenter>
            <div>Test</div>
            <div>Test</div>
          </RowCenter>
          <Grid container>
            <Grid item lg={6} xs={12}>
              <Typography>Test</Typography>
              <WhiteText>Test</WhiteText>
              <Button variant="contained">Test</Button>
            </Grid>
            <Grid item lg={6} xs={12}>
              <HomeHeaderImage src={HeaderImg} />
            </Grid>
          </Grid>
        </Container>
      </Paper>
    </>
  );
};

export { HomeHeader };
