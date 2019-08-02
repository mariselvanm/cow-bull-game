import React from 'react';
import './GameStartComponent.scss';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Icon from '@material-ui/core/Icon';

// const useStyles = makeStyles(theme => ({
//     button: {
//       margin: theme.spacing(1),
//     },
//     leftIcon: {
//       marginRight: theme.spacing(1),
//     },
//     rightIcon: {
//       marginLeft: theme.spacing(1),
//     },
//     iconSmall: {
//       fontSize: 20,
//     },
// }));

const gameStart = props => {
    // const classes = useStyles();
    
    const gameLevelMap = Object.keys(props.levels).map(levelKey => {
        return <Button 
                key={levelKey} 
                onClick={() => props.setGameLevel(levelKey)}
                className={props.gameLevel === props.levels[levelKey].levelValue ? "active" : ''}>{levelKey}</Button>;
    });

    return (
        <div className="game-start-comp">
            <Grid container spacing={6}>
                <Grid item xs={12} md={6}>
                    <Grid container spacing={2} direction="row" alignItems="center">
                    <Grid item>
                        <ButtonGroup
                        variant="contained"
                        color="secondary"
                        size="large"
                        aria-label="large contained secondary button group"
                        >
                            {gameLevelMap}
                        </ButtonGroup>
                    </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Button 
                variant="contained" 
                color="primary" 
                className="start-game"
                onClick={props.startGame}>
                    Start
                <Icon className="icon">send</Icon>
            </Button>
        </div>
    );
    // return(
    //     <div className="game-start-comp">
    //         <ul>
    //             {gameLevelMap}
    //         </ul>
    //         <button
    //             className="start-button"
    //             onClick={props.startGame}>Start</button>
    //     </div>
    // );
};

export default gameStart;