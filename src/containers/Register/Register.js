import React, { Component } from "react";
import Styles from "./Register.module.scss";
import { Link } from "react-router-dom";

const intialState = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  confirmPassword: "",
  firstnameError: "",
  lastnameError: "",
  emailError: "",
  passwordError: "",
  confirmPasswordError: ""
};

class Login extends Component {
  state = intialState;

  changeHandler = e => {
    const isCheckbox = e.target.type === "checkbox";
    console.log(e.target.name);
    this.setState({
      [e.target.name]: isCheckbox ? e.target.checked : e.target.value
    });
  };
  validate = () => {
    let firstnameError = "";
    let lastnameError = "";
    let emailError = "";
    let passwordError = "";
    let confirmPasswordError = "";

    if (!this.state.firstname) {
      firstnameError = "* First name should not be empty";
    }

    if (!this.state.lastname) {
      lastnameError = "* Last name cannot be empty";
    }

    if (!this.state.email.includes("@")) {
      emailError = "* invalid email";
    }

    if (this.state.password.length < 6 || this.state.password.length > 18) {
      passwordError = "* Password should be between 6-18 characters";
    }
    if (this.state.confirmPassword !== this.state.password) {
      confirmPasswordError = "* Passwords didn't match";
    }

    if (
      firstnameError ||
      lastnameError ||
      emailError ||
      passwordError ||
      confirmPasswordError
    ) {
      this.setState({
        firstnameError,
        lastnameError,
        emailError,
        passwordError,
        confirmPasswordError
      });
      return false;
    }
    return true;
  };
  submitHandler = e => {
    e.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      this.setState(intialState);
    }
  };

  render() {
    return (
      <form onSubmit={this.submitHandler} className={Styles.formContainer}>
        <div className={Styles.registerContainer}>
          <div className={Styles.headerContainer}>
            <h2 className={Styles.registerItemHeading}>Register</h2>
          </div>
          <ul className={Styles.registerList}>
            <li className={Styles.registerItem}>
              <h6 className={Styles.registerHeading}>First name</h6>
              {/* ***** */}
              <input
                className={Styles.registerInput}
                name="firstname"
                value={this.state.firstname}
                onChange={this.changeHandler}
              />
              {/* ***** */}
              <div className={Styles.errMessage}>
                {this.state.firstnameError}
              </div>
            </li>
            <li className={Styles.registerItem}>
              <h6 className={Styles.registerHeading}>Last name</h6>
              {/* ***** */}
              <input
                className={Styles.registerInput}
                name="lastname"
                value={this.state.lastname}
                onChange={this.changeHandler}
              />
              {/* ***** */}
              <div className={Styles.errMessage}>
                {this.state.lastnameError}
              </div>
            </li>
            <li className={Styles.registerItem}>
              <h6 className={Styles.registerHeading}>email</h6>
              {/* ***** */}
              <input
                className={Styles.registerInput}
                name="email"
                value={this.state.email}
                onChange={this.changeHandler}
              />
              {/* ***** */}
              <div className={Styles.errMessage}>{this.state.emailError}</div>
            </li>
            <li className={Styles.registerItem}>
              <h6 className={Styles.registerHeading}>Password</h6>
              {/* ***** */}
              <input
                className={Styles.registerInput}
                name="password"
                type="password"
                value={this.state.password}
                onChange={this.changeHandler}
              />
              {/* ***** */}
              <div className={Styles.errMessage}>
                {this.state.passwordError}
              </div>
            </li>
            <li className={Styles.registerItem}>
              <h6 className={Styles.registerHeading}>Confirm password</h6>
              {/* ***** */}
              <input
                className={Styles.registerInput}
                name="confirmPassword"
                type="password"
                value={this.state.confirmPassword}
                onChange={this.changeHandler}
              />
              {/* ***** */}
              <div className={Styles.errMessage}>
                {this.state.confirmPasswordError}
              </div>
            </li>

            <li className={Styles.registerItemButton}>
              <button type="submit" className={Styles.registerButton}>
                Register !
              </button>
            </li>

            <div className={Styles.registerlink}>
              <Link to="/login">Login with your account?</Link>
            </div>
          </ul>
        </div>
      </form>
    );
  }
}

export default Login;
