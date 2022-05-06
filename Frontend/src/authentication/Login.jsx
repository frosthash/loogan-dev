import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useUserAuth } from "../contexts/UserAuthContext";
import GoogleButton from "react-google-button";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { signIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();

  // When the login button is clicked, the  user is logged in
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signIn(email, password);
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/dashboard");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div
      style={
        (loginContainer,
        {
          backgroundColor: "rgb(1, 27, 51)",
        })
      }
    >
      <div style={container}>
        <div style={title} name="MyClassroom">
          <text>Lọọgan</text>
        </div>
        <div className="form" style={formContainer}>
          <Form
            name="normal_login"
            className="login-form"
            onSubmit={handleSubmit}
          >
            <Form.Item
              name="username"
              rules={[
                { required: true, message: "Please input your Username!" },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
                style={textInput}
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your Password!" },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
                style={textInput}
              />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>
                  <p style={{ color: "white" }}>Remember me</p>
                </Checkbox>
              </Form.Item>

              <a className="login-form-forgot" href="/forgot-paassword">
                Forgot password
              </a>
            </Form.Item>

            <Form.Item>
              <Button type="submit" variant="primary" onClick={handleSubmit}>
                Log in
              </Button>
            </Form.Item>

            <div>
              <GoogleButton
                className="g-btn"
                type="dark"
                onClick={handleGoogleSignIn}
              />
            </div>
            <div>
              <span style={{ color: "white" }}> Don't have an account? </span>
              <Link to="/signup"> Sign up </Link>
            </div>
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
  height: "10vh",
};

const title = {
  fontSize: 43,
  color: "white",
  fontWeight: 500,
  fontFamily: `"Inter-Bold", "Inter", sans-serif`,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "30vh",
};

const loginButton = {
  backgroundColor: "lightgreen",
  borderRadius: "5px",
  height: "50px",
  width: "auto",
};

const textInput = {
  paddingTop: 8,
  paddingBottom: 8,
  paddingLeft: 8,
  paddingRight: 8,
};
