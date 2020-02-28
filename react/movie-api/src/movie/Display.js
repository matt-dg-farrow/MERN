import React, { Component } from 'react'

export class Display extends Component {
    render() {
        return (
            <div>
                <p>{this.props.name}: {this.props.data}</p>
            </div>
        )
    }
}

export default Display
