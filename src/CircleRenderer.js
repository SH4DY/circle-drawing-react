import React from 'react';
import AddCircle from './AddCircle'

//This is just a container for all circles
class CircleContainer extends React.Component {

    render() {
        //TODO for each element in props.circles array, draw a circle
        return (
            <div>
            {this.props.circles.map(function(c){
               return (<AddCircle x={c.x} y={c.y} radius={c.radius}/>) //TODO read from each circle object
             })}
            </div>
        )
    }
}

export default CircleContainer;