import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      noofrows: 0,
      columnsstring: "",
      gutterrow: "",
      guttercol: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    return (
      <div className="Main">
        <h2>REACT GRID SYSTEM </h2>
        <input
          type="text"
          name="noofrows"
          placeholder="No. of Rows"
          onChange={this.handleInputChange}
        />
        <input
          type="text"
          name="columnsstring"
          placeholder="Columns String"
          onChange={this.handleInputChange}
        />
        <br />
        <input
          type="text"
          name="gutterrow"
          placeholder="Space between rows "
          onChange={this.handleInputChange}
        />
        <input
          type="text"
          name="guttercol"
          placeholder="Space between boxes"
          onChange={this.handleInputChange}
        />
        <br />
        <br />
        {console.log(this.state)}

        <Box specs={this.state} />
        <Box specs={this.state} />
      </div>
    );
  }
}
function Box(props) {
  const margin = props.specs.guttercol;
  const boxobj = { height: "100px", border: "5px solid", margin: margin };
  console.log(boxobj);
  return (
    <div className="Box" style={boxobj}>
      <h1>100px Height Box</h1>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Main />, rootElement);
