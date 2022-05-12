import "./Register.css";
import { Button, Form } from "react-bootstrap";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const Register = () => {
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);
  const navigate = useNavigate();

  const navigateLogin = (event) => {
    navigate("/login");
  }
  if(user){
    navigate('/home');
  }

  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const handleRegister = (event) => {
    event.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    createUserWithEmailAndPassword(email, password);
    // console.log(createUserWithEmailAndPassword(email, password));
  }

  return (
    <div>
      <Form onSubmit={handleRegister} className="form-container w-50 mx-auto">
        <h2>Please Register</h2>

        <Form.Group className="mb-3">
          <Form.Control ref={nameRef} type="name" name="name" placeholder="Full Name" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            ref={emailRef}
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            ref={passwordRef}
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Text className="text-muted">
          We'll never share your password with anyone else.
        </Form.Text>

        <Form.Group className="mb-3">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button className="w-100" variant="primary" type="submit">
          Register
        </Button>
        <p>Already have an account? <span onClick={navigateLogin} className="text-danger">Please Login</span></p>
      </Form>
    </div>
  );
};

export default Register;
