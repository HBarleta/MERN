import React, { Component } from "react";

// const darkMode = {
//     backgroundColor: "black",
//     color: "white"
// }
// const lightMode = {
//     backgroundColor: "white",
//     color: "black"
// }

// const buttonStyle = {
//     width: "150px",
//     height: "60px",
//     backgroundColor: "grey",
//     fontSize: "1.2em",
//     borderRadius: "10px"
// }
// export default class First extends Component {
//     constructor(props){
//         super(props)
//         this.state ={
//             light : true
//         }
//     }
//   render() {
//     const {firstName, lastName, number} = this.props;
//     return (
//       <div style={this.state.light ? lightMode : darkMode}>
//         <h2>First Name: {firstName}</h2>
//         <h2>Last Name: {lastName}</h2>
//         <h3>Age: {number}</h3>
//         <button style={buttonStyle} onClick={()=>this.setState({light: !this.state.light})}>{this.state.light ? "Dark Mode": "Light Mode"}</button>
//       </div>
//     )
//   }
// }
const listStyle = {
  listStyleType: "none",
};

export default class First extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { greeting, list } = this.props;
    return (
      <div>
        <h1>{greeting}</h1>
        <h2>{list}</h2>
        <p>{this.props.children}</p>
      </div>
    );
  }
}
