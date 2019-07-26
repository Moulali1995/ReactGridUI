import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
// Main component for inputs and Box component calls.
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      noofrows: 0,
      columnsstring: "",
      gutterrow: "0px",
      guttercol: "0px"
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  // handle the input change for different attributes like no. of rows,columns,padding and margin.
  handleInputChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    let rows = [];
    // columnsarr to get the number of columns
    let columnsarr = this.state.columnsstring.split(",");
    console.log(columnsarr);
    // Loop for returning the grid of rows and columns
    for (var i = 0; i < this.state.noofrows; i++) {
      for (var j = 0; j < parseInt(columnsarr[i], 10); j++) {
        rows.push(<Box specs={this.state} />);
      }
      rows.push(<br />);
    }
    console.log(rows);
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
        {rows.map(ele => {
          return ele;
        })}
      </div>
    );
  }
}
// Box component to return the box elements which are to be rendered in the grid.
function Box(props) {
  const { gutterrow, guttercol } = props.specs;
  // style object to provide the style attributes for the box
  const boxStyle = {
    height: "100px",
    border: "5px solid",
    backgroundColor: "brown",
    marginLeft: gutterrow,
    marginTop: guttercol
  };

  return (
    <div className="Box" style={boxStyle}>
      <h1>100px Height Box</h1>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Main />, rootElement);
