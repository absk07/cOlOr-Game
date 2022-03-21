import React, { Component } from 'react';
import Box from './Box'
import './Box.css';


class BoxContainer extends Component {
    static defaultProps = {
        numBoxes: 20
    };
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const boxes = Array.from({length: this.props.numBoxes}).map(() => <Box />);
        return (
            <div className="boxContainer">{boxes}</div>
        );
    }
}
  
 export default BoxContainer;