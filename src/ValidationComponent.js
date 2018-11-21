import React from 'react'


const ValidationComponent = (props) => {
    let validMessage = 'Secret code is too short.'
    if (props.secret_code.length > 7) {
        validMessage = 'Secret code is long enough!'
    }
    return (
        <div>
            <strong>
                {validMessage}
            </strong>
        </div>
    )
}

export default ValidationComponent