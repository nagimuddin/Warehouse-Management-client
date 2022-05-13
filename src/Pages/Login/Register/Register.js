import "./Register.css";
import { Button, Form } from "react-bootstrap";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword,useUpdateProfile } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const Register = () => {
  const [agree, setAgree] = useState(false); 
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const navigate = useNavigate();

  const navigateLogin = (event) => {
    navigate("/login");
  }
  if(user){
    console.log('user', user);
  }

  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const handleRegister = async(event) => {
    event.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    console.log('Updated profile');
    navigate('/home');
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
          <Form.Check className={agree ? '': 'text-danger'} onClick={()=>setAgree(!agree)} type="checkbox" name="terms" id="terms" label="Accept Terms And Condition" />
        </Form.Group>
        <Button disabled={!agree} className="w-100" variant="primary" type="submit">
          Register
        </Button>
        <p>Already have an account? <span onClick={navigateLogin} className="text-info">Please Login</span></p>
      </Form>
    </div>
  );
};

export default Register;
