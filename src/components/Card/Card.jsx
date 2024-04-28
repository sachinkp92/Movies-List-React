import React from "react";
import "./style.css";

const Card = ({ cardDetails }) => {
  let { moviemainphotos } = cardDetails;
  return (
    <div className="col-md-3 mb-3">
      <div className="card">
        {/* <h6>{cardDetails.movietitle}</h6> */}
        <img src={moviemainphotos} alt="img" />
      </div>
    </div>
  );
};

export default Card;
