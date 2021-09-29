import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@mui/styles';
import Button from '../components/Button';
import ProductHeroLayout from './ProductHeroLayout';
import { Link } from "react-router-dom";
import { Typography, Grid } from '@mui/material';
// import Carousel from 'react-material-ui-carousel'

//const images = ['./public/slideshow1.jpg', './slideshow2.jpg', './slideshow3.jpg', './slideshow4.jpg', './slideshow5.jpg', './slideshow6.jpg']
// const backgroundImage =
//  'https://images.unsplash.com/photo-1534854638093-bada1813ca19?auto=format&fit=crop&w=1400&q=80';
const styles = (theme) => ({
  background: {
    backgroundImage: `url('slideshow1.jpg')`,
    backgroundColor: '#7fc7d9', // Average color of the background image.
    backgroundPosition: 'center',
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(10),
    },
  },
  more: {
    marginTop: theme.spacing(2),
  },
});

function ProductHero(props) {
  const { classes } = props;

  return (
    <ProductHeroLayout backgroundClassName={classes.background}>
      <Grid container justifyContent="center" spacing={12}>
        {/* <Carousel>
        {
          images.map((path, i) => <img style={{ display: 'none' }} src={path} alt="Panda workers doing their job." />)
        }
      </Carousel> */}
        <Grid item xs={12}>
          <img style={{ display: 'none' }} src={'./public/slideshow1.jpg'} alt="Panda workers doing their job." />
        </Grid>
        <Grid item xs={12}>
          <Typography color="inherit" variant="h2" align='center' >
            <span style={{ color: "#5bd620" }}>{'Clean'}</span> {'pest control, for your lifestyle'}
          </Typography>
        </Grid>
        <Link to={"/quote"}>
          <Button
            style={{ textAlign: 'center', backgroundColor: '#5bd620', marginTop: 100 }}
            variant="contained"
            size="large"
            component="a"
          >
            Get Pricing
          </Button>
        </Link>
        <Grid item xs={12}>
          <Typography align='center'>Panda Pest Control is Arizona's top rated eco-friendly pest control service. With over a decade of pest control experience, our team of pest control professionals are trained and equipped to protect your home or business. Using cutting edge technology along with best green pest control products, Panda Pest Control is able to deliver the best results.
            Although we are best known for our success rate in scorpion control; our five step regular protection program is what has disrupted the pest control industry in Arizona.Find out why we are Arizona's premier pest control company.
          </Typography>
        </Grid>
      </Grid>
    </ProductHeroLayout>
  );
}

ProductHero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHero);