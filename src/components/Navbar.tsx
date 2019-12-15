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
import { ThemeContext } from './../context/theme.context';

class Navbar extends React.Component<{ classes: any }, {}> {
  static contextType = ThemeContext;
  constructor(props: any) {
    super(props);
  }
  render() {
    console.log(this.context);
    const { classes } = this.props;
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
  }
}

export default withStyles(styles)(Navbar);
