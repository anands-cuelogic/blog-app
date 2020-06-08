import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import './Signup.css';
import Spinner from '../../UI/Spinner/Spinner';
import FormError from '../../UI/FormError/FormError';
import * as actions from '../../../store/action';

const Signup = props => {

  const initialValues = {
    email: '',
    password: '',
    passwordAgain: '',
  };

  const onSubmit = values => {
    props.onSignup(values.email, values.password)
  }

  const validate = values => {
    let errors = {};

    if(!values.email) {
      errors.email = 'Required'
    } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email format'
    }

    if(!values.password) {
      errors.password = 'Required'
    }

    if(values.password && values.password.length < 6) {
      errors.password = 'Password must be of minimum 6 characters.'
    }

    if(!values.passwordAgain) {
      errors.passwordAgain = 'Required'
    } else if(values.password !== values.passwordAgain) {
      errors.passwordAgain = 'Password doesn\'t match';
    }

    return errors;
  };

  let form = (<div className="form-wrapper">
  {props.error && <FormError>{props.error}</FormError>}
  <h3>Signup</h3>
  <Formik initialValues={initialValues} onSubmit={onSubmit} validate={validate}>
    <Form>
      <p>Already have an account?<Link to="/login">Login</Link></p>
      <div className="row">

        <div className="col-md-12">
          <div className="form-group">
            <label>Email</label>
            <Field type="text" name="email" className="form-control" placeholder="Email" />
            <ErrorMessage name="email" component={FormError}/>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label>Password</label>
            <Field type="password" name="password" className="form-control" placeholder="Password" />
            <ErrorMessage name="password" component={FormError}/>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label>Confirm Password</label>
            <Field type="password" name="passwordAgain" className="form-control" placeholder="Confirm Password" />
            <ErrorMessage name="passwordAgain" component={FormError}/>
          </div>
        </div>
      </div>
      <div className="text-center">
        <button className="btn btn-primary" type="submit">Sign Up</button>
      </div>
    </Form>
  </Formik>
</div>);

  if(props.loading) {
    form = <Spinner />
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          {form}
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  loading: state.auth.loading,
  error: state.auth.error
})

const mapDispatchToProps = dispatch => ({
  onSignup: (email, password) => dispatch(actions.auth(email, password, true))
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
