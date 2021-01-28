import React from "react";
import { ToggleButton, ToggleButtonGroup } from "react-bootstrap";
import PropTypes from "prop-types";

const ButtonGroup = ({ styleClass, value, onClick }) => {
 return (
  <>
    <ToggleButtonGroup
    type="radio"
    name="togbtn"
    value={value}
    onChange={onclick}
   >
    <ToggleButton className={`btn ${styleClass}`} value={1}>
     VeryPoor
    </ToggleButton>
    <ToggleButton className={`btn ${styleClass}`} value={2}>
     Poor
    </ToggleButton>
    <ToggleButton className={`btn ${styleClass}`} value={3}>
     Satisfactory
    </ToggleButton>
    <ToggleButton className={`btn ${styleClass}`} value={4}>
     Good
    </ToggleButton>
    <ToggleButton className={`btn ${styleClass}`} value={5}>
     Excellent
    </ToggleButton>
   </ToggleButtonGroup>
  </>
 );
};
ButtonGroup.prototype = {
 value: PropTypes.string.isRequired,
 styleClass: PropTypes.string,
};

ButtonGroup.defaultProps = {
 styleClass:"btn btn-warning btn-sm"

};

export default ButtonGroup;
