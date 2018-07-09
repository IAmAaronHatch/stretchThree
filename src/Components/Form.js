import React, { Component } from 'react';

export default class Form extends Component {
    constructor() {
        super()

        this.state = {
            name: '',
            age: ''
        }
    }

    handleNameInput(val) {
        this.setState({
            name: val
        })
    }

    handleAgeInput(val) {
        this.setState({
            age: val
        })
    }

    render() {
        console.log(this.state)
        return (
            <div className='component' >
                <h1>My Form is:</h1>
                name:
                <input type='text' onChange={(e) => this.handleNameInput(e.target.value)} />
                <br/>
                <br/>
                age:
                <input type='text' onChange={(e) => this.handleAgeInput(e.target.value)} />
                <hr />
                <p>
                    {this.state.name}
                </p>
                <p>
                    {this.state.age}
                </p>
                <p>this is a stateful, class component</p>

            </div>
        )
    }
}


