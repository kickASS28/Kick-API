import classes from "./AuthPage.module.css";
import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Background from "../components/Background";
import InputField from "../components/InputField";
import ManPng from "../assets/man.png";
import { fetchLogin, fetchSignup, logout, setError } from "../store/AuthSlice";
import Header from "../components/Header";
import Footer from "../components/Footer";
const AuthPage = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const storedUsername = useSelector((state) => state.auth.username);
  const authenticationError = useSelector((state) => state.auth.error);
  const loading = useSelector((state) => state.auth.isLoading);
  const dispatch = useDispatch();
  const [loginState, setLoginState] = useState(true);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [emailOrUsername, setEmailOrUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState(null);
  const [emailOrUsernameError, setEmailOrUsernameError] = useState("");
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);

  const handleChangeFormState = () => {
    setLoginState(!loginState);
  };

  const usernameChangeHandler = ({ target }) => {
    const usernameInput = target.value;
    if (usernameInput.trim().length < 3) {
      setUsernameError("Username must be atleast 3 chracters long!");
    } else {
      setUsernameError(null);
    }
    setUsername(usernameInput);
  };

  const emailOrUsernameChangeHandler = ({ target }) => {
    const usernameInput = target.value;
    if (usernameInput.trim().length < 3) {
      setEmailOrUsernameError("Please enter valid username or email!");
    } else {
      setEmailOrUsernameError(null);
    }
    setEmailOrUsername(usernameInput);
  };

  const emailChangeHandler = ({ target }) => {
    const emailInput = target.value;
    if (!emailInput) {
      setEmailError("Please enter valid email address!");
    } else {
      setEmailError(null);
    }
    setEmail(emailInput);
  };

  const passwordChangeHandler = ({ target }) => {
    const passwordInput = target.value;
    if (passwordInput.length < 8) {
      setPasswordError("Password must be atleast 8 characters long!");
    } else {
      setPasswordError(null);
    }
    setPassword(passwordInput);
  };

  const clearForm = () => {
    setEmail("");
    setEmailError(null);
    setPassword("");
    setPasswordError(null);
    setUsername("");
    setUsernameError(null);
    setEmailOrUsername("");
    setEmailOrUsernameError(null);
  };

  const formOnSubmiHandler = async (event) => {
    event.preventDefault();
    const data = loginState
      ? {
          emailOrUsername,
          password,
        }
      : {
          username,
          email,
          password,
        };
    if (loginState) {
      if (emailOrUsername === "" || password === "") {
        dispatch(setError("Please enter valid credentials!"));
        return;
      }
      dispatch(fetchLogin(data));
    } else {
      if (
        email === "" ||
        password === "" ||
        username === "" ||
        emailError ||
        passwordError ||
        usernameError
      ) {
        dispatch(setError("Please enter valid credentials!"));
        return;
      }
      dispatch(fetchSignup(data));
    }
  };

  const logoutSubmitHandler = () => {
    clearForm();
    dispatch(logout());
  };

  return (
    <Fragment>
      <Header />
      <Background
        title={
          isAuthenticated
            ? `Welcome ${storedUsername}`
            : loginState
            ? "Login"
            : "Sign-Up"
        }
      >
        <div className={classes.formContainer}>
          <img
            src={ManPng}
            alt="Businessman Standing all cheered up"
            width="140"
          />
          {!isAuthenticated && !loading && (
            <form className={classes.form} onSubmit={formOnSubmiHandler}>
              {authenticationError && (
                <p className={classes.error}>{authenticationError}</p>
              )}
              {!loginState && (
                <InputField
                  label="Enter Username"
                  id="username"
                  type="text"
                  value={username}
                  changeHandler={usernameChangeHandler}
                  error={usernameError}
                />
              )}
              {!loginState && (
                <InputField
                  label="Enter Email"
                  id="email"
                  type="email"
                  value={email}
                  changeHandler={emailChangeHandler}
                  error={emailError}
                />
              )}
              {loginState && (
                <InputField
                  label="Enter Username/Email"
                  id="emailorusername"
                  type="text"
                  value={emailOrUsername}
                  changeHandler={emailOrUsernameChangeHandler}
                  error={emailOrUsernameError}
                />
              )}
              <InputField
                label="Enter Password"
                id="password"
                type="password"
                value={password}
                changeHandler={passwordChangeHandler}
                error={passwordError}
              />
              <div className={classes.actions}>
                <input type="submit" value={loginState ? "Login" : "Sign-Up"} />
                <input
                  type="button"
                  value={loginState ? "Switch to Sign-Up" : "Switch to Login"}
                  onClick={handleChangeFormState}
                />
              </div>
            </form>
          )}
          {loading && (
            <div className={classes.form}>
              <h3>{loginState ? "Logging you in..." : "Signing you up..."}</h3>
            </div>
          )}
          {isAuthenticated && (
            <div className={classes.authenticatedContent}>
              <p className={classes.authenticatedText}>
                If you are having any issue you can post your issue in community
                section or contact developers through socials at the bottom. We
                will always be there for you :)
              </p>
              <form className={classes.actions} onSubmit={logoutSubmitHandler}>
                <input
                  type="submit"
                  value="Logout"
                  onClick={handleChangeFormState}
                />
              </form>
            </div>
          )}
        </div>
      </Background>
      <Footer />
    </Fragment>
  );
};

export default AuthPage;
