import React from "react";
import "./style.css";

function Head(props) {
  return <h1 className="head">{props.children}</h1>;
}

export default Head;