import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@mui/styles';
import Button from '../components/Button';
import { Link } from "react-router-dom";
import { Typography, Grid } from '@mui/material';
import Carousel from 'react-material-ui-carousel'

const images = ['slideshow1.jpg', 'slideshow3.jpg', 'slideshow4.jpg']
const styles = (theme) => ({

  text: {
    position: 'absolute',
    marginLeft: 'auto',
    marginRight: 'auto',
    left: 0,
    right: 0,
    textAlign: 'center', zIndex: 1,
    [theme.breakpoints.up('xs')]: {
      fontSize: 32
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: 64,
      lineHeight: '100%',
      marginTop: '30px'
    },
    [theme.breakpoints.up('md')]: {
      fontSize: 72
    },

  },
  image: {
    [theme.breakpoints.down('md')]: {
      height: '100%',
      width: '100%'
    },
  },
  button: {
    position: 'absolute',
    zIndex: 1,
    top: 450,

    [theme.breakpoints.down('md')]: {
      top: 300,
    },
    [theme.breakpoints.down('sm')]: {
      top: 250,
    },
  },
});

function ProductHero(props) {
  const { classes } = props;
  return (
    <Grid container justifyContent="center">
      <Grid item xs={12}>
        <text className={classes.text} >
          <span style={{ color: "#5bd620" }}>{'Clean'}</span> {'pest control, for your lifestyle'}
        </text>
        <Carousel indicators={false} animation='slide' stopAutoPlayOnHover={false}>

          {
            images.map((path, i) => <img className={classes.image} src={path} alt="Panda workers doing their job." />)
          }
        </Carousel>
      </Grid>
      <Grid className={classes.button} item xs={8} md={3} >
        <Link to={"/quote"}>
          <Button

            fullWidth
            style={{ backgroundColor: '#5bd620' }}
            variant="contained"
            size="large"
            component="a"
          >
            Get Pricing
          </Button>
        </Link>
      </Grid>
      <Grid item xs={12}>
        <Typography style={{ margin: '20px', marginTop: 60 }} align='center'>Panda Pest Control is Arizona's top rated eco-friendly pest control service. With over a decade of pest control experience, our team of pest control professionals are trained and equipped to protect your home or business. Using cutting edge technology along with best green pest control products, Panda Pest Control is able to deliver the best results.
          Although we are best known for our success rate in scorpion control; our five step regular protection program is what has disrupted the pest control industry in Arizona.Find out why we are Arizona's premier pest control company.
        </Typography>
      </Grid>
    </Grid>
  );
}

ProductHero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHero);