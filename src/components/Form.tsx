import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import styles from './../styles/formStyles';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {
  Paper,
  Avatar,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Input,
  Checkbox,
  FormControlLabel,
  Button
} from '@material-ui/core';
const Form = (props: any) => {
  const { classes } = props;

  return (
    <main className={classes.main}>
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5">Sign In</Typography>
        <Select value="English">
          <MenuItem value="English">English</MenuItem>
          <MenuItem value="Hrvatski">Hrvatski</MenuItem>
          <MenuItem value="Deutsch">Deutsch</MenuItem>
        </Select>
        <form className={classes.form}>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input
              id="email"
              name="email"
              autoFocus
              className={classes.formInput}
            ></Input>
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
              id="password"
              name="password"
              autoFocus
              className={classes.formInput}
            ></Input>
          </FormControl>
          <FormControlLabel
            control={<Checkbox color="primary" />}
            label="Remember me"
          />
          <Button
            variant="contained"
            type="submit"
            fullWidth
            color="primary"
            className={classes.submitButton}
          >
            Sign In
          </Button>
        </form>
      </Paper>
    </main>
  );
};

export default withStyles(styles)(Form);
