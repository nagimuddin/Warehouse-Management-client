import React from "react";
import google from "../../../images/google-logo.png";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  let errorElement;

  if (error) {
    errorElement = <p className="text-danger">Error: {error.message}</p>;
  }

  if (user) {
    navigate("/home");
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
        <p className="text-primary px-3 mb-0">or</p>
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
      </div>
      {errorElement}
      <div className="text-center">
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-primary my-3 mb-3"
        >
          <img className="me-2" src={google} alt="" />
          Google Sign In
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
