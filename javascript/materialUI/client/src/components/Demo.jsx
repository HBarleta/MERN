import React from "react";
import {
  Typography,
  AppBar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
  ButtonGroup,
  ThemeProvider,
  Button,
  createTheme,
} from "@mui/material";

import CameraAltIcon from "@mui/icons-material/CameraAlt";

const Demo = () => {
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <CameraAltIcon />
          <Typography variant="h6">Photo Album</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div>
          <Container maxWidth="sm">
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Photo Album
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Hello everyone! This is a photo album and I'm trying to make this
              sentence as long as possible so its really long on the screen
            </Typography>
            <div>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="secondary">
                    See my photos
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="contained" color="primary">
                    Secondary Action
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="contained" color="info">
                    Third Action
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
      </main>
    </>
  );
};

export default Demo;
