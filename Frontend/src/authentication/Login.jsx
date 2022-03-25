import React, { useRef, useState, Dimensions } from "react";
import { Form, Button, Card, Alert, Container } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import useWindowDimensions from "./Dimensions.jsx";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Failed to log in");
    }

    setLoading(false);
  }

  const { height, width } = useWindowDimensions();

  return (
    <div
      style={
        (loginContainer,
        {
          width: { width },
          height: { height },
          backgroundColor: "#011b33",
        })
      }
    >
      <div style={container}>
        <div style={title} name="MyClassroom">
          <text>Lọọgan</text>
        </div>
        <div className="form" style={formContainer}>
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Control
                placeholder="Email Address"
                type="email"
                required
                style={Input}
              />
            </Form.Group>
            <Form.Group id="password">
              <Form.Control
                type="password"
                placeholder="Password"
                required
                style={Input}
              />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Control
                type="password"
                placeholder="Password Confirmation"
                required
                style={Input}
              />
            </Form.Group>
            <Form.Group>
              <Button
                variant="success"
                className="w-100"
                type="submit"
                style={loginButton}
              >
                Login to your account
              </Button>
            </Form.Group>
          </Form>
        </div>
      </div>
    </div>
  );
}

const container = {
  alignItems: "center",
  justifyContent: "center",
  display: "block",
  height: "100vh",
  paddingTop: "10vh",
};
const loginContainer = {
  height: "auto",
  width: "auto",
};

const formContainer = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "white",
  boxSizing: "border-box",
  width: "350px",
  height: "350px",
  marginTop: "20px",
  marginLeft: "940px",
  marginRight: "300px",
};

const title = {
  fontSize: 43,
  color: "white",
  fontWeight: 500,
  fontFamily: `"Inter-Bold", "Inter", sans-serif`,
  justifyContent: "center",
  display: "flex",
};

const loginButton = {
  backgroundColor: "lightgreen",
  borderRadius: "5px",
  height: "50px",
  width: "auto",
};

const Input = {
  border: "rgba(0, 0, 0, 0)",
  focusColor: "rgb(0, 153, 255)",
  fontSize: 13,
  padding: 8,
  boxSizing: "border-box",
  borderRadius: 5,
  borderColor: "rgb(87, 88, 78)",
  marginBottom: 17,
  position: "relative",
  placeholderColor: "rgb(170, 170, 170)",
  textColor: "rgb(51, 51, 51)",
};
