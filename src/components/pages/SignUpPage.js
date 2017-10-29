import React from 'react';
import PropTypes from 'prop-types';
import SignUpForm from "../forms/SignUpForm";
import { connect } from 'react-redux';
import { signup } from '../../actions/users';

class SignUpPage extends React.Component {

  submit = data => this.props.signup(data).then(() => this.props.history.push("/dashboard"));
  render() {
    return (
      <div>
          <h1>Sign Up Page </h1>

          <SignUpForm submit={this.submit} />
      </div>
    );
  }
}

SignUpPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,

  signup: PropTypes.func.isRequired
}

export default connect(null, {signup})(SignUpPage);

// const SignUpPage = () => (
//   <div>
//     <h1>Login Page </h1>
//
//     <LoginForm />
//   </div>
// );