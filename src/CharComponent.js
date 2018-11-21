import React from 'react'


const CharComponent = (props) => {
    return (
        <span className="secretChar" onClick={() => props.charHandler(props.charIndex)}>
            {props.char}
        </span>
    )
}

export default CharComponent