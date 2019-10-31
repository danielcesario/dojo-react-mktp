import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    color: 'white',
    marginRight: '20px'
  }
}));

export default function Navbar() {
  const classes = useStyles();

  const LinkTo = React.forwardRef((props, ref) => <RouterLink innerRef={ref} {...props} />);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Link className={classes.link} component={LinkTo} to="/register">Register</Link>
          <Link className={classes.link} component={LinkTo} to="/">List</Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}