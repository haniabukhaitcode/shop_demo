import React, { Component } from "react";
import Styles from "./Login.module.scss";
import { Link } from "react-router-dom";
import Checkbox from "../../components/Layout/UI/Checkbox/Checkbox";
const intialState = {
  email: "",
  password: "",
  rememberMe: true,
  emailError: "",
  passwordError: ""
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
    let emailError = "";
    let passwordError = "";
    if (this.state.password.length < 6) {
      passwordError = "* Password can't be less than 6 characters";
    }
    if (!this.state.email.includes("@")) {
      emailError = "* invalid email";
    }
    if (emailError || passwordError) {
      this.setState({ emailError, passwordError });
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
        <div className={Styles.loginContainer}>
          <div className={Styles.headerContainer}>
            <h2 className={Styles.loginItemHeading}>Login</h2>
          </div>

          <ul className={Styles.loginList}>
            <li className={Styles.loginItem}>
              <h6 className={Styles.loginHeading}>Email</h6>
              <input
                className={Styles.loginInput}
                name="email"
                value={this.state.email}
                onChange={this.changeHandler}
              />
              <div className={Styles.errMessageEmail}>
                {this.state.emailError}
              </div>
            </li>

            <ul className={Styles.loginItem}>
              <li className={Styles.containerPassword}>
                <h6 className={Styles.loginHeading}>Password</h6>
                <div className={Styles.containerAnchor}>
                  <Link to="/forgot-password"> Forgot your password?</Link>
                </div>
              </li>
              <li className={Styles.containerPassword}>
                <input
                  className={Styles.loginInput}
                  name="password"
                  type="password"
                  value={this.state.password}
                  onChange={this.changeHandler}
                />
              </li>
              <div className={Styles.errMessagePassword}>
                {this.state.passwordError}
              </div>
            </ul>

            <li className={Styles.loginItemButton}>
              <button type="submit" className={Styles.loginButton}>
                Login
              </button>
            </li>
            <li className={Styles.sectionIcons}>
              <div className={Styles.checkboxContainer}>
                <Checkbox
                  name="rememberMe"
                  type="checkbox"
                  checked={this.state.rememberMe}
                  onChange={this.changeHandler}
                />
                <p className={Styles.rememberMe}>Remember me ?</p>
              </div>
              <div className={Styles.containerIcons}>
                <i className={`${Styles.iconFacebook} fab fa-facebook-f `} />
                <i className={`${Styles.iconGmail} fab fa-google `} />
                <i className={`${Styles.iconTwitter} fab fa-twitter`} />
              </div>
            </li>

            <div className={Styles.registerlink}>
              <Link to="/register"> Don't have account yet?</Link>
            </div>
          </ul>
        </div>
      </form>
    );
  }
}

export default Login;
