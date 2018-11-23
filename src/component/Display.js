import React from "react";
import PropTypes from "prop-types";

import "./Display.css";

// displaying the prop values 
class Display extends React.Component {
  render() {
    return (
      <div className="component-display">
        <div>{this.props.value}</div>
      </div>
    );
  }
}

// putting the values into strings 
Display.propTypes = {
  value: PropTypes.string,
};
export default Display;
