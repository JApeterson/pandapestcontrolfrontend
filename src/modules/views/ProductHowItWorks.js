import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@mui/styles';
import { Grid, Container } from '@mui/material';
import Button from '../components/Button';
import Typography from '../components/Typography';
import { Link } from "react-router-dom";

const styles = (theme) => ({
  root: {
    display: 'flex',
    backgroundColor: theme.palette.primary.light,
    overflow: 'hidden',
  },
  container: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(15),
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 5),
  },
  title: {
    marginBottom: theme.spacing(14),
  },
  number: {
    fontSize: 24,
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.secondary.main,
    fontWeight: theme.typography.fontWeightMedium,
  },
  image: {
    height: 205,
    zIndex: 1,
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  curvyLines: {
    pointerEvents: 'none',
    position: 'absolute',
    top: -180,
    opacity: 0.7,
  },
  button: {
    marginTop: theme.spacing(8),
    backgroundColor: '#5bd620'
  },
});

function ProductHowItWorks(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <img
          src="/productCurvyLines.png"
          className={classes.curvyLines}
          alt="curvy lines"
        />
        <Typography align="center" variant="h4" className={classes.title} component="h2">
          Our process
        </Typography>
        <div>
          <Grid container alignItems="center" spacing={5}>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <div className={classes.number}>1.</div>
                <img
                  src="/calltext.jpg"
                  alt="call/text"
                  className={classes.image}
                />
                <Typography variant="h5" align="center">
                  Call/text
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <div className={classes.number}>2.</div>
                <img
                  src="/chooseprogram.jpg"
                  alt="graph"
                  className={classes.image}
                />
                <Typography variant="h5" align="center">
                  Choose your program and schedule
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <div className={classes.number}>3.</div>
                <img
                  src="/pestfree.jpg"
                  alt="clock"
                  className={classes.image}
                />
                <Typography variant="h5" align="center">
                  Live pest free
                </Typography>
              </div>
            </Grid>
          </Grid>
        </div>
        <Grid container justifyContent="center">
          <Link to={"/quote"}>
            <Button
              style={{ backgroundColor: "#5bd620", marginTop: 20 }}
              size="large"
              variant="contained"
              className={classes.button}
              component="a"
            >
              Get started
            </Button>
          </Link>
        </Grid>
      </Container>
    </section>
  );
}

ProductHowItWorks.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHowItWorks);
