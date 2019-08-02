import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  title: {
    display: 'none',
    textAlign: 'center',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            Cows &amp; Bulls
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

// import React from 'react';
// import './GameHeader.scss';

// const gameHeader = props => (
//     <div className="header">Cows And Bulls</div>
// );

// export default gameHeader;