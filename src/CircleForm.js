import React from 'react';

//This class allows you to trigger the drawing of circles
//in a sibling component
class CircleForm extends React.Component {

    //This method is called for every click of the button
    addCircle() {
        //Here we call the method of the PARENT(!) because
        //the drawing of the actual circle happens in a sibling component
        this.props.handleAddCircle(1,1,15);
    }

    render() {
        return (
            <button onClick={this.addCircle.bind(this)}>
                Add Circle
            </button>
        );
    }
}

export default CircleForm;