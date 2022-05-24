import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

import "../scss/card.scss";

export default function MachineCard({ image, title, weight, power }) {
  return (
    <>
      <div className="col-lg-4">
        <div className="card">
          <Router>
            <Link to="/details">
              <img className="img-fluid" src={image} alt={title} />
              <h2>{title}</h2>
            </Link>
          </Router>
          <p>Operating weight: {weight}</p>
          <p>Power: {power}</p>
        </div>
      </div>
    </>
  );
}
