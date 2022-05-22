import {
  Box,
  Card,
  Container,
  Grid,
  ListItem,
  Typography,
} from "@mui/material";

const Home = () => {
  return (
    <>
      <Box sx={{ backgroundColor: "#cccccc" }}>
        <Container maxWidth="lg">
          <Card>Test</Card>
          <Grid container>
            <Grid item lg={8} md={4} xs={12}>
              <Card>3</Card>
            </Grid>
            <Grid item lg={4} md={6} xs={12}>
              <Card>3</Card>
            </Grid>
            {/* <Grid item>
            <div>3</div>
          </Grid> */}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Home;
