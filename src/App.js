import { Container, Grid, Divider } from "@material-ui/core";

function App() {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item>Item</Grid>
        <Grid item>
          <Divider orientation="vertical" />
        </Grid>
        <Grid item>Item</Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item>
          <div>Item</div>
          <div>Item</div>
        </Grid>
        <Grid item>
          <Divider orientation="vertical" />
        </Grid>
        <Grid item>Item</Grid>
      </Grid>

      {/* This does not work */}
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <div>Item</div>
          <div>Item</div>
        </Grid>
        <Grid item>
          <Divider orientation="vertical" />
        </Grid>
        <Grid item>Item</Grid>
      </Grid>

      {/* This does not work */}
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <div>Item</div>
          <div>Item</div>
        </Grid>
        <Grid item>
          <Divider orientation="vertical" flexItem />
        </Grid>
        <Grid item>Item</Grid>
      </Grid>
    </Container>
  );
}

export default App;
