import React from 'react';
import { Card, Form, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const ManageItems = () => {
    return (
        <div className="container">
        <div className="row">
          <div className="col-12">
            <Card className="w-50 mx-auto my-3" style={{ width: "18rem" }}>
              <Card.Img variant="top" src="https://buthydro.sirv.com/images/bikes-1.jpg" />
              <Card.Body>
                <Card.Title>DUCATI HYPER 950</Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>Powerd By: DUCATI</ListGroupItem>
                <ListGroupItem>Price: $5,200</ListGroupItem>
                <ListGroupItem>Quantity: 20</ListGroupItem>
                <ListGroupItem>id: 627f80add80a77a5e6a791f9</ListGroupItem>
                <ListGroupItem>About: The greatest combinetion of smartness,power and prefiction.</ListGroupItem>
              </ListGroup>
              <Card.Body className="text-center">
                <Card.Link className="btn btn-danger px-5 my-2 w-100" >Delete Items</Card.Link>
                <Form.Control type="number" placeholder="Password" />
                <Link className="btn btn-info px-5 my-2 w-100" to="/add-items" >Add Items</Link>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    );
};

export default ManageItems;