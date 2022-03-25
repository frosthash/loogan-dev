import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert, Container } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import style from "./Signup.css";

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const schoolRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Failed to create an account");
    }

    setLoading(false);
  }

  return (
    <div style={signupContainer}>
      <div style={title}>
        <text>Getting things started.</text>
      </div>
      <div style={inputContainer}>
        <Form onSubmit={handleSubmit}>
          <Form.Group id="school">
            <Form.Control
              placeholder="Enter School Name"
              type="school"
              ref={schoolRef}
              required
              style={Input}
            />
          </Form.Group>
          <Form.Group id="email">
            <Form.Control
              placeholder="Enter Email Address"
              type="email"
              ref={emailRef}
              required
              style={Input}
            />
          </Form.Group>
          <Form.Group id="password">
            <Form.Control
              type="password"
              placeholder="Enter Password"
              ref={passwordRef}
              required
              style={Input}
            />
          </Form.Group>
          <Form.Group id="password-confirm">
            <Form.Control
              type="password"
              placeholder="Enter Password Again"
              ref={passwordConfirmRef}
              required
              style={Input}
            />
          </Form.Group>
          <Form.Group>
            <Button
              disabled={loading}
              className="w-100"
              type="submit"
              variant="success"
            >
              Sign Up
            </Button>
          </Form.Group>
        </Form>
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
