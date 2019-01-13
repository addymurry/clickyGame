import React from "react";
import "./style.css";

function Card(props) {
  return (
    <div onClick={() => props.shuffler(props.id)} className="shuffle">
    <div className="card">
        <div className="img" >
          <img alt={props.id} src={props.image} />
        </div>
      </div>
    </div>
  );
}

export default Card;