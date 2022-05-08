import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";

const SignIn = () => {
  return (
    <div>
      <Form className="w-50 mx-auto">
        <h2>Please Sign In here</h2>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control type="name" placeholder="Your Name" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>

        <Form.Group className="mb-3">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <p className="w-50 mx-auto">New to here?<Link to="/register" className="text-dengar w-50 mx-auto">Please Register</Link></p>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default SignIn;
