import React from "react";
import './heading.css';

class Heading extends React.Component {
  render() {
    return (
      <div>
        <ul className="navigation">
          <li>Home</li>
          <li>Blog</li>
          <li>Artykuły</li>
        </ul>
      </div>
    );
  }
}

export default Heading;