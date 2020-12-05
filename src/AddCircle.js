import React from 'react';
import styled from 'styled-components';

let StyledDiv = styled.div`
        background-color: grey;
        width: ${({ radius }) => 2*radius}px;
        height: ${({ radius }) => 2*radius}px;
        border-radius: 50%;
        left: ${({ x }) => x}px;
        top: ${({ y }) => y}px;
        position: relative;
    `;

class AddCircle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {radius: props.radius,
            x: props.x,
            y: props.y};
      }
      

    render() {
        return <StyledDiv radius={this.state.radius} y={this.state.y} x={this.state.x} />;
    }
}

export default AddCircle;