import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const MyItems = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12"></div>
        <div className="card mb-3"/>
          <div className="row g-0">
            <div className="col-md-4">
              <img src="https://buthydro.sirv.com/images/bikes-2.jpg" className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">DUCATI HYPER 950</h5>
                <p className="card-text">
                  <small className="text-muted">Powerd By: DUCATI</small>
                </p>
                <p className="card-text">
                  <small className="text-muted">Price: $5,200</small>
                </p>
                <p className="card-text">
                  <small className="text-muted">Quantity: 20</small>
                </p>
                <p className="card-text">
                  <small className="text-muted">id: 627f80add80a77a5e6a791f9</small>
                </p>
                <p className="card-text">
                About: The greatest combinetion of smartness,power and prefiction.
                </p>
                <Card.Link className="btn btn-danger px-5 my-2 w-100" >Delete Items</Card.Link>
                <Link className="btn btn-info px-5 my-2 w-100" to="/add-items" >Add Items</Link>

              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default MyItems;
