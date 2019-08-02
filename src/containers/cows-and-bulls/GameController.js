import React, { Component } from 'react';
import './GameController.scss';
import KeyboardEventHandler from 'react-keyboard-event-handler';
import CustomInputComponent from '../../components/CustomInputComponent';
import HistoryComponent from '../../components/HistoryComponent';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

class GameController extends Component {
    _isMounted = false;
    setinterval = null;

    state = {
        initialValue: '',
        histry:[],
        try:0,
        showTime: {
            seconds: '00',
            minutes: '00'
        },
        gameState: false
    }

    componentDidMount() {
        this.setinterval = setInterval(this.updateTimer, 1000);
    }

    componentWillUnmount() {
        clearTimeout(this.setinterval);
    }

    updateTimer = () => {
        let copyState = {...this.state};
        let seconds = +(copyState.showTime.seconds) + 1;
        let minutes = +(copyState.showTime.minutes);

        if (seconds >= 60) {
            minutes++;
            seconds = 0;
        }

        if (seconds < 10) {
            seconds = '0' + seconds;
        }

        if (minutes < 10) {
            minutes = '0' + minutes;
        }

        this.setState({
            showTime: {
                seconds: seconds,
                minutes: minutes
            }
        });
    }

    setInputValue(key) { 
        if (this.state.initialValue.length && (key === 'backspace' || key === 'delete')) {
            let initialValue = this.state.initialValue.split('');
            initialValue.pop();
            initialValue = initialValue.join('');
            this.setState({
                initialValue: initialValue,
            });
            return;
        }
        
        
        if( (key === 'enter' || key === 'return') 
            && (this.state.initialValue.length === this.props.inputLevel)) {
                return;
        }

        if (this.state.initialValue.length === this.props.inputLevel) {
            return;
        }

        let initialValue = this.state.initialValue + key;
        this.setState({
            initialValue: initialValue,
        });
    }

    checkGuess = () => {
        let stateCopy = {
            ...this.state
        };

        this.setState({
            initialValue: '',
        });

        let findNumber = (this.props.gussingNumber + '').split('').map(el => {
            return +el;
        });

        let guess = stateCopy.initialValue.split('').map(el => {
            return +el;
        });
        
        if (this.props.inputLevel !== guess.length) {
            return;
        }

        let cow = 0, bulls = 0;

        guess.forEach((e, i) => {
            if (findNumber[i] === e) {
                cow ++;
                findNumber[i] = null;
            } else if (findNumber.includes(e)) {
                bulls ++;
                findNumber[findNumber.indexOf(e)] = null;
            }
        });

        if ( cow === this.props.inputLevel ) {
            let histryObj = {
                guss: this.state.initialValue,
                cowCount: cow,
                bullCount: bulls
            };

            let histryArray = stateCopy.histry;
            histryArray.push(histryObj);
            this.setState({
                histry: histryArray,
                gameState: true
            });

            return;
        }

        this.setState({
            try: stateCopy.try + 1
        });

        if ( !cow && !bulls ) {
            let histryObj = {
                guss: this.state.initialValue,
                cowCount: cow,
                bullCount: bulls
            };

            let histryArray = stateCopy.histry;
            histryArray.push(histryObj);
            this.setState({
                histry: histryArray
            });

            return;
        }

        if (cow || bulls) {
            let histryObj = {
                guss: this.state.initialValue,
                cowCount: cow,
                bullCount: bulls
            };

            let histryArray = stateCopy.histry;
            histryArray.push(histryObj);
            this.setState({
                histry: histryArray
            });
        }
    }

    closeModel = () => {
        let copyState = {...this.state};
        this.setState({
            gameState: !copyState.gameState
        });
        this.resetGame();
    }

    resetGame = () => {
        this.props.reset();
    }

    render() {
        return(
            <React.Fragment>
                <CssBaseline />
                <Container maxWidth="sm">
                    <Typography component="div" className="game-controller" style={{ backgroundColor: "transparent"}}>
                    <CustomInputComponent 
                        level={this.props.inputLevel}
                        inputValue={this.state.initialValue}/>
                    <Button 
                        variant="contained" 
                        color="primary" 
                        className="start-game"
                        onClick={this.checkGuess}>Guss What?</Button>
                    <div className="showTime">
                        {this.state.showTime.minutes}:{this.state.showTime.seconds}
                    </div>
                    <div className="tryCount">{this.state.try}</div>
                    <KeyboardEventHandler
                        handleKeys={['numeric', 'delete', 'backspace', 'enter', 'return']}
                        onKeyEvent={(key, e) => this.setInputValue(key)} />
                    {this.state.histry.length ?
                        <HistoryComponent 
                            histry={this.state.histry}/> : null
                    }
                    <div className={"model ".concat(
                        this.state.gameState ? "showModel" : ''
                    )}>
                        <h3>You Won</h3>
                        <h3>Hidden Number:<span>{this.props.gussingNumber}</span></h3>
                        <Fab 
                            className="Button-style-change"
                            color="primary" 
                            aria-label="add" 
                            onClick={this.closeModel}>
                            <AddIcon />
                        </Fab>
                    </div>
                    </Typography>
                </Container>
            </React.Fragment>
        );
    }

}

export default GameController;