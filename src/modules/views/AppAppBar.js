import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "../components/AppBar";
import Toolbar, { styles as toolbarStyles } from "../components/Toolbar";
import { Link } from "react-router-dom";

const styles = (theme) => ({
  title: {
    fontSize: 24,
    color: theme.palette.common.white,
    justifyContent: "flex-end"
  },
  placeholder: toolbarStyles(theme).root,
  toolbar: {
    justifyContent: "space-between",
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
    './headerLogo.jpg';
  return (
    <div>
      <AppBar>
        <Toolbar>
          <div className={classes.right}>
            <Link to={"/"}>
              <img height="70" src={backgroundImage} alt="Panda Pest Control Logo" />
            </Link>
          </div>
          <Link to={"/quote"}>
            {/* <Typography
                color="inherit"
                variant="h6"
                underline="none"
                className={classes.rightLink}
              >
                {"Sign In"}
              </Typography> */}
          </Link>
          <Link to={"/quote"}>
            {/* <Typography
              variant="h6"
              underline="none"
              className={clsx(classes.rightLink, classes.linkSecondary)}
            >
              {"Sign Up"}
            </Typography> */}
          </Link>

        </Toolbar>
      </AppBar>
      <div className={classes.placeholder} />
    </div>
  );
}

AppAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppAppBar);
