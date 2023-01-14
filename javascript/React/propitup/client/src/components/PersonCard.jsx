import React, { useState } from "react";

// class PersonCard extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       age: this.props.age,
//     };
//   }
const PersonCard = (props) => {
  const [age, setAge] = useState(props.age);
  const { firstName, lastName, hairColor } = props;
  const addBirthday = () => {
    setAge(age + 1);
  };

  return (
    <div>
      <h2>
        {firstName}, {lastName}
      </h2>
      <p>Age: {age}</p>
      <p>Hair Color: {hairColor}</p>
      <button className="btn btn-primary" onClick={addBirthday}>
        Birthday Button for {firstName} {lastName}
      </button>
    </div>
  );
};

export default PersonCard;
