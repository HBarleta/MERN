import React, { Component } from "react";

class PersonCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { firstName, age, hairColor } = this.props;
    return (
      <div>
        <h2>{firstName}</h2>
        <p>Age: {age}</p>
        <p>Hair Color: {hairColor}</p>
      </div>
    );
  }
}

export default PersonCard;
