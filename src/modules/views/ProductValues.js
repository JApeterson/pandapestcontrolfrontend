import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '../components/Typography';

const styles = (theme) => ({
  root: {
    display: 'flex',
    overflow: 'hidden',
    backgroundColor: theme.palette.primary.light,
  },
  container: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(30),
    display: 'flex',
    position: 'relative',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 5),
  },
  image: {
    height: 105,
  },
  title: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  curvyLines: {
    pointerEvents: 'none',
    position: 'absolute',
    top: -180,
  },
});

function ProductValues(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <img
          src="/productCurvyLines.png"
          className={classes.curvyLines}
          alt="curvy lines"
        />
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src="/scorpion.jpg"
                alt="scorpion"
              />
              <Typography variant="h6" className={classes.title}>
                Scorpion Control
              </Typography>
              <Typography variant="h5">
                {'Scorpions are some of the most persistent and aggressive pests in Arizona. Enjoy a scorpion-free home with our effective treatment'}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src="/mosquito.jpg"
                alt="mosquito"
              />
              <Typography variant="h6" className={classes.title}>
                Mosquito Control
              </Typography>
              <Typography variant="h5">
                {'Mosquitos can be difficult to control, especially after the monsoon season and during the months of extreme heat. Our Panda pest professionals can keep them out of your backyard.'}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src="/mouse.jpeg"
                alt="mouse"
              />
              <Typography variant="h6" className={classes.title}>
                Rodent Control
              </Typography>
              <Typography variant="h5">
                {'Our state of the art approach to rodent control has revolutionized and accelerated the way we control mice and rats in your home or business. '}
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

ProductValues.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductValues);
