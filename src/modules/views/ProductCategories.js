import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '../components/Typography';

const styles = (theme) => ({
  root: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(4),
  },
  images: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexWrap: 'wrap',
  },
  imageWrapper: {
    position: 'relative',
    display: 'block',
    padding: 0,
    borderRadius: 0,
    height: '40vh',
    [theme.breakpoints.down('sm')]: {
      width: '100% !important',
      height: 100,
    },
    '&:hover': {
      zIndex: 1,
    },
    '&:hover $imageBackdrop': {
      opacity: 0.15,
    },
    '&:hover $imageMarked': {
      opacity: 0,
    },
    '&:hover $imageTitle': {
      border: '4px solid currentColor',
    },
  },
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: theme.palette.common.black,
    opacity: 0.5,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px 14px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
});

function ProductCategories(props) {
  const { classes } = props;


  return (
    <Container className={classes.root} component="section">
      <Typography variant="h4" marked="center" align="center" component="h2">
        Why Panda?
      </Typography>
      <Typography variant="h4" style={{ color: "#5bd620" }}>Quality green products</Typography>
      <Typography variant="h6">We only use the cleanest organically derived products in and around your house. The safety of your pets and family is our top priority.</Typography>
      <Typography variant="h4" style={{ color: "#5bd620" }}>Our people</Typography>
      <Typography variant="h6">Our team members are highly trained, background checked, clean cut, courteous and always wear a Panda Pest Control uniform.</Typography>
      <Typography variant="h4" style={{ color: "#5bd620" }}>Scorpion guarantee</Typography>
      <Typography variant="h6">Arizona is home to more than 40 different species of scorpions. Do not let these intimidating creatures live in your home rent-free</Typography>
      <Typography variant="h4" style={{ color: "#5bd620" }}> Response time</Typography>
      <Typography variant="h6"> When it comes to pests, there is no such thing as too fast; that is why 80% of our new customers are serviced within 24 hours. </Typography>
      <Typography variant="h4" style={{ color: "#5bd620" }}>Cutting-edge Technology</Typography>
      <Typography variant="h6">Unlike the majority of pest professionals in the area, we utilize top notch technology to communicate and schedule our clients as well as to record and track pest activity. Plus, paperless billing and auto-pay allows you to have full control of your service.</Typography>
      <Typography variant="h4" style={{ color: "#5bd620" }}>Unmatched customer service</Typography>
      <Typography variant="h6">Our customer service representatives are friendly, timely and pest-savvy. SE HABLA ESPAÑOL.</Typography>
      {/* <div className={classes.images}>
        {images.map((image) => (
          <ButtonBase
            key={image.title}
            className={classes.imageWrapper}
            style={{
              width: image.width,
            }}
          >
            <div
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(${image.url})`,
              }}
            />
            <div className={classes.imageBackdrop} />
            <div className={classes.imageButton}>
              <Typography
                component="h3"
                variant="h6"
                color="inherit"
                className={classes.imageTitle}
              >
                {image.title}
                <div className={classes.imageMarked} />
              </Typography>
            </div>
          </ButtonBase>
        ))}
      </div> */}
    </Container>
  );
}

ProductCategories.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductCategories);
