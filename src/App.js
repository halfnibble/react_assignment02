import React, { Component } from 'react'
import ValidationComponent from './ValidationComponent'
import CharComponent from './CharComponent'
import './App.css'

class App extends Component {
    state = {
        secret_code: ''
    }

    secretCodeHandler = (event) => {
        this.setState({
            secret_code: event.target.value
        })
    }

    charHandler = (index) => {
        let secret_array = [...this.state.secret_code]
        secret_array.splice(index, 1)
        this.setState({
            secret_code: secret_array.join('')
        })
    }

    render() {
        return (
            <div className="App">
                <input type="text" name="secret_code" onChange={this.secretCodeHandler} value={this.state.secret_code} />
                <p>
                    Secret Length: {this.state.secret_code.length}
                </p>
                <ValidationComponent secret_code={this.state.secret_code} />
                <div>
                    {[...this.state.secret_code].map((char, charIndex) => {
                        return <CharComponent key={charIndex} char={char} charIndex={charIndex} charHandler={this.charHandler} />
                    })}
                </div>
            </div>
        )
    }
}

export default App
