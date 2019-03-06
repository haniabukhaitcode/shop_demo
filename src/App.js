import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Loadable from "react-loadable";
import Layout from "./components/Layout/Layout";

function Loading() {
  return <h3>Loading...</h3>;
}

const HomePage = Loadable({
  loader: () => import("./containers/HomePage/HomePage"),
  loading: Loading
});

const Login = Loadable({
  loader: () => import("./containers/Login/Login"),
  loading: Loading
});
const Register = Loadable({
  loader: () => import("./containers/Register/Register"),
  loading: Loading
});

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};
export default withRouter(connect(mapStateToProps)(App));
