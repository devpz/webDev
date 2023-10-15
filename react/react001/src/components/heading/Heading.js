import React from "react";
import './heading.css';

class Heading extends React.Component {
  constructor() {
    super(); //wywołanie nadrzędnego konstruktora
    this.state = {link1: "Link1"}; //stan
  }
  render() {
    return (
      <div>
        <nav>
          <h1>{this.props.headerTitle}</h1>
          <ul className="navigation">
           <li>Home</li>
           <li>Blog</li>
           <li>{this.state.link1}</li>
         </ul>
        </nav>
      </div>
    );
  }
}

export default Heading;