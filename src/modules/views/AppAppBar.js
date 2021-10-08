import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@mui/styles";
import AppBar from "../components/AppBar";
import { Link } from "react-router-dom";

const styles = (theme) => ({
  title: {
    fontSize: 24,
    color: theme.palette.common.white,
    justifyContent: "flex-end"
  },

  left: {
    flex: 1,
  },
  leftLinkActive: {
    color: theme.palette.common.white,
  },
  right: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-end",

  },
  rightLink: {
    fontSize: 16,
    color: theme.palette.common.white,
    marginLeft: theme.spacing(3),
  },
  linkSecondary: {
    color: theme.palette.secondary.main,
  },
});

function AppAppBar(props) {
  const { classes } = props;
  const backgroundImage =
    './headerLogo.png';
  return (
    <div>
      <AppBar>
        <div className={classes.right}>
          <Link to={"/"}>
            <img height="80" src={backgroundImage} alt="Panda Pest Control Logo" />
          </Link>
        </div>
      </AppBar>
      <div className={classes.placeholder} />
    </div>
  );
}

AppAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppAppBar);
