import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    return (
        <div>
      <Form className="w-50 mx-auto">
        <h2>Please Register</h2>
        <Form.Group className="mb-3">
          <Form.Control type="name" placeholder="First Name" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control type="name" placeholder="Last Name" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Text className="text-muted">
          We'll never share your password with anyone else.
        </Form.Text>

        <Form.Group className="mb-3">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <p className='w-50 mx-auto'>Already have an account?<Link to="/signin" className="text-dengar w-50 mx-auto">Please Sign In</Link></p>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Register;