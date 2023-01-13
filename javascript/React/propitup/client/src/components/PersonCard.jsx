import React, { Component } from "react";

class PersonCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: this.props.age,
    };
  }
  render() {
    const { firstName, lastName, hairColor } = this.props;
    return (
      <div>
        <h2>
          {firstName}, {lastName}
        </h2>
        <p>Age: {this.state.age}</p>
        <p>Hair Color: {hairColor}</p>
        <button
          className="btn btn-primary"
          onClick={() => this.setState({ age: this.state.age + 1 })}
        >
          Birthday Button for {firstName} {lastName}
        </button>
      </div>
    );
  }
}

export default PersonCard;
