import React from 'react';

class CircleForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};

      }

    addCircle() {
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