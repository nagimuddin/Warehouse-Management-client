import React, { useRef } from "react";
import "./Login.css";
import { Button, Form } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from.pathname || "/";

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  if (user) {
    navigate(from, {replace: true});
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    // console.log(email, password);
    signInWithEmailAndPassword(email, password);
  };

  const navigateRegister = (event) => {
    navigate("/register");
  };
  return (
    <div className=" w-50 mx-auto">
      <Form onSubmit={handleSubmit} className="form-container">
        <h2>Please Sign In here</h2>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>

        <Form.Group className="mb-3">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button className="w-100" variant="primary" type="submit">
          Submit
        </Button>
        <p>
          New to here?{" "}
          <span onClick={navigateRegister} className="text-danger">
            Please Register
          </span>
        </p>
      </Form>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;
