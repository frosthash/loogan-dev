import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useUserAuth } from "../contexts/UserAuthContext";
import GoogleButton from "react-google-button";
import {
  getAuth,
  signInWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { auth } from "../config/firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { signIn, googleSignIn } = useUserAuth();
  const [timeActive, setTimeActive] = useState(false);
  const navigate = useNavigate();
  const auth = getAuth();

  const handleInputChnage = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  // When the login button is clicked, the  user is logged in
  const onLogin = (e) => {
    e.preventDefault();
    setError("");

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  // When the user clicks the Google sign in button, the user is logged in
  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/");
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
          <p>Lọọgan</p>
        </div>
        <div className="form" style={formContainer}>
          <Form name="normal_login" onSubmit={onLogin}>
            <Form.Item
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Enter Email"
                style={textInput}
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Item>
            <Form.Item
              rules={[
                { required: true, message: "Please input your Password!" },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Enter Password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
            <div style={auth__error}>{error}</div>
            <Form.Item>
              <Button
                style={loginButton}
                type="submit"
                variant="primary"
                onClick={onLogin}
              >
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
  backgroundColor: "teal",
  height: "50px",
  width: "240px",
  display: "block",
  borderRadius: "1px",
  fontFamily: "Roboto, sans-serif, arial",
  color: "white",
};

const textInput = {
  paddingTop: 8,
  paddingBottom: 8,
  paddingLeft: 8,
  paddingRight: 8,
};

const auth__error = {
  color: "red",
};

export default Login;
