import React, { Component } from 'react';
import GameStartComponent from '../../components/GameStartComponent';
import GameController from './GameController';

const GAME_LEVELS = {
    easy: {
        levelValue: 3,
    },
    medium: {
        levelValue: 4,
    },
    hard: {
        levelValue: 5,
    },
};

class CowsAndBulls extends Component {
    state = {
        gameStart: false,
        gameLevel: GAME_LEVELS.easy.levelValue,
        randomGussNumber: 111,
    }

    componentDidMount() {
        let randomNumber = Math.floor(Math.random() * Math.pow(10, this.state.gameLevel));
        this.setState({
            randomGussNumber: randomNumber
        });
    }

    setGameLevel = (type) => {
        let randomNumber = Math.floor(Math.random() * Math.pow(10, GAME_LEVELS[type].levelValue));
        this.setState({
            gameLevel: GAME_LEVELS[type].levelValue,
            randomGussNumber: randomNumber,
        });
    }

    startGame = () => {
        this.setState({
            gameStart: true
        });
    }

    resetGame = () => {
        this.setState({
            gameStart: false
        });
    }

    render() {
        return(
            <React.Fragment>
                {!this.state.gameStart ? 
                    <GameStartComponent 
                        levels={GAME_LEVELS} 
                        setGameLevel={this.setGameLevel}
                        startGame={this.startGame} 
                        gameLevel={this.state.gameLevel} /> 
                    :
                    <GameController 
                        inputLevel={this.state.gameLevel}
                        gussingNumber={this.state.randomGussNumber}
                        reset={this.resetGame}/>
                }
            </React.Fragment>
        );
    }
} 

export default CowsAndBulls;