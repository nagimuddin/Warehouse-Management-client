import React, { useRef } from "react";
import "./Login.css";
import { Button, Form } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { useSignInWithEmailAndPassword, useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from.pathname || "/";
  let errorElement;

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  if (user) {
    navigate(from, {replace: true});
  }

  if (error) {
    errorElement = (
        <p className="text-danger">Error: {error?.message}</p>
    );
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
  }

  const resetPassword = async() => {
    const email = emailRef.current.value;
    await sendPasswordResetEmail(email);
    alert('Sent email');
  }
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

        <Button className="w-100" variant="primary" type="submit">
          Login
        </Button>
        <p>
          New to here?{" "}
          <span onClick={navigateRegister} className="text-primary">
            Please Register
          </span>
        </p>
        <p>
          Forget Pssword?{" "}
          <span onClick={resetPassword} className="text-primary">
            Resset Pssword
          </span>
        </p>
      </Form>
      {errorElement}
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;
