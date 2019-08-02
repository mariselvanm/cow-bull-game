import React from 'react';
import './CustomInputComponent.scss';

const customInputComponent = props => {
    let inputValueArray = props.inputValue ? 
                            props.inputValue.split('') :
                            [];

    const generateInput = [...Array(props.level)].map( (_, index) => {
        return <li key={index}>{inputValueArray[index] ? inputValueArray[index] : ''}</li>;
    });

    return(
        <ul className="custom-input-component">
            {generateInput}
        </ul>
    );
}

export default customInputComponent;