import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles/navbar';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Switch,
  InputBase
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
const Navbar = (props: any) => {
  console.log(props);
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit">
            <span>FR</span>
          </IconButton>
          <Typography variant="h6" color="inherit">
            App Title
          </Typography>
          <Switch />
          <div className={classes.grow} />
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search..."
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withStyles(styles)(Navbar);
