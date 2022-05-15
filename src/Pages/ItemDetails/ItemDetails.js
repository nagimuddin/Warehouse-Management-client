import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { Link } from "react-router-dom";

const ItemDetails = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="https://buthydro.sirv.com/images/bikes-2.jpg" />
            <Card.Body>
              <Card.Title>YAMAHA MT10</Card.Title>
              <Card.Text>
              Powerd By: YAMAHA
              </Card.Text>
              <Card.Text>
              Price: $5,200
              </Card.Text>
              <Card.Text>
              quantity: 20
              </Card.Text>
              <Card.Text>
                id: 627f80ad2e89c5a276e31439
              </Card.Text>
              <Card.Text>
              About: The greatest combinetion of smartness,power and prefiction.
              </Card.Text>
            </Card.Body>
            <Card.Body className="text-center">
              <Card.Link className="btn btn-danger px-5 my-2 w-100">Delete</Card.Link>
              <Link className="btn btn-info px-5 ms-auto my-2 w-100" to="/add-items">Add Item</Link>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
