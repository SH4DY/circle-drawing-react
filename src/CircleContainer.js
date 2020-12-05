import React from 'react';
import AddCircle from './AddCircle'

//This is just a container for all circles
class CircleContainer extends React.Component {

    //In here we just iterate over the props array 'circles' containing
    //a description of each circle and instantiate AddCircle for each
    render() {
        return (
            <div>
            {this.props.circles.map(function(c){
               return (<AddCircle x={c.x} y={c.y} radius={c.radius}/>)
             })}
            </div>
        )
    }
}

export default CircleContainer;