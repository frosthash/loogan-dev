import React, { useRef, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import { auth } from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { useUserAuth } from "../contexts/UserAuthContext";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { signUp } = useUserAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { setTimeActive } = useUserAuth();

  // Validating the password, and confirm the password inputs
  const validatePassword = () => {
    let isValid = true;
    if (password !== "" && confirmPassword !== "") {
      if (password !== confirmPassword) {
        isValid = false;
        setError("Passwords does not match");
      }
    }
    return isValid;
  };

  // When the register button is clicked, the
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      if (validatePassword()) {
        // Create a new user with email and password using firebase
        createUserWithEmailAndPassword(auth, email, password)
          .then(() => {
            sendEmailVerification(auth.currentUser)
              .then(() => {
                setTimeActive(true);
                navigate("/verify-email");
              })
              .catch((err) => alert(err.message));
          })
          .catch((err) => setError(err.message));
        setEmail("");
        setPassword("");
        setConfirmPassword("");
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div style={signupContainer}>
      <div style={title}>
        <text>Getting things started.</text>
      </div>
      <div style={inputContainer}>
        <Form onSubmit={handleSubmit} name="registration_form">
          <Form.Group>
            <Form.Control
              type="email"
              value={email}
              placeholder="Enter your email"
              required
              onChange={(e) => setEmail(e.target.value)}
              style={Input}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="password"
              value={password}
              placeholder="Enter your password"
              required
              onChange={(e) => setPassword(e.target.value)}
              style={Input}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="password"
              value={confirmPassword}
              placeholder="Confirm password"
              required
              onChange={(e) => setConfirmPassword(e.target.value)}
              style={Input}
            />
          </Form.Group>
          <Form.Group>
            <Button
              type="primary"
              htmlType="submit"
              className="signup-form-button"
              style={signUpButton}
            >
              Sign Up
            </Button>
          </Form.Group>
        </Form>
        <span style={{ color: "white" }}>
          Already have an account?
          <Link to="/login"> Sign in </Link>
        </span>
      </div>
    </div>
  );
}
const title = {
  width: "auto",
  height: "auto",
  whiteSpace: "pre",
  overflow: "visible",
  fontWeight: 700,
  fontFamily: `"Inter-Bold", "Inter", sans-serif`,
  color: "white",
  fontSize: 46,
  flexDirection: "row",
  paddingTop: 80,
  paddingLeft: 100,
  letterSpacing: -2,
  lineHeight: 1.1,
};

const signupContainer = {
  flexShrink: 0,
  width: "auto",
  height: "auto",
  boxShadow: "0px 10px 20px 0px rgba(0, 0, 0, 0.05)",
  backgroundColor: "#011b33",
  overflow: "hidden",
  paddingBottom: 250,
};

const inputContainer = {
  width: "auto",
  height: "auto",
  paddingTop: 400,
  paddingLeft: 100,
  paddingBottom: 220,
  paddingRight: 1176,
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  overflow: "visible",
};

const Input = {
  border: "rgba(0, 0, 0, 0)",
  focusColor: "rgb(0, 153, 255)",
  fontSize: 13,
  padding: 8,
  borderRadius: 5,
  marginBottom: 17,
  position: "relative",
  placeholderColor: "rgb(170, 170, 170)",
  textColor: "rgb(51, 51, 51)",
};

const signUpButton = {
  backgroundColor: "teal",
  height: "50px",
  width: "240px",
  display: "block",
  borderRadius: "1px",
  fontFamily: "Roboto, sans-serif, arial",
  color: "white",
};
