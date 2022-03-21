import React, { Component } from 'react';
import { choice } from './helpers';
import './Box.css';

class Box extends Component {
    static defaultProps = {
        allColors: ['red', 'pink', 'yellow', 'orange', 'purple', 'slateblue', 'skyblue', 'blue', 'green', 'olivegreen', 'grey', 'black', 'magenta', 'blueviolet', 'brown', 'blurywood', 'seagreen', 'salmon', 'silver', 'slategray', 'plum', 'springgreen', 'steelblue', 'palegreen']
    };
    constructor(props) {
        super(props);
        this.state = { color: choice(this.props.allColors) }
        this.handleClick = this.handleClick.bind(this);
    }
    pickColor() {
        let newColor;
        do {
            newColor = choice(this.props.allColors);
        } while(newColor === this.state.color);
        this.setState(st => {
            return { color: newColor }
        });
    }
    handleClick() {
        this.pickColor();
    }

    render() { 
        return (
            <div className="box" style={{backgroundColor: this.state.color}} onClick={this.handleClick}>

            </div>
        );
    }
}
 
export default Box;