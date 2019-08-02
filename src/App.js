import React from 'react';
import './App.scss';
import CowsAndBulls from './containers/cows-and-bulls/GameStarter';
import GameHeader from './components/GameHeader';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    width: '50%',
    height: '600px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    '-ms-transform': 'translateX(-50%) translateY(-50%)',
    '-webkit-transform': 'translate(-50%,-50%)',
  }
});

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <Card className={classes.card}>
        <GameHeader />
        <CowsAndBulls />
      </Card>
    </div>
  );
}

export default App;
