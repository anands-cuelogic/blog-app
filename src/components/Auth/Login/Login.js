import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Formik, Form, ErrorMessage, Field } from 'formik';

import * as actions from '../../../store/action';
import Spinner from '../../UI/Spinner/Spinner';
import FormError from '../../UI/FormError/FormError';

const Login = props => {

  const initialValues = {
    email: '',
    password: ''
  };

  const onSubmit = values => {
    props.onAuth(values.email, values.password)
  }

  const validate = values => {
    let errors = {};

    if(!values.email) {
      errors.email = 'Required'
    } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email format'
    }

    if (!values.password) {
      errors.password = 'Required';
    }

    return errors;
  }

  let form = (<div className="form-wrapper">
    {props.error && <FormError>{props.error}</FormError>}
    <h3>Login</h3>
    <Formik initialValues={initialValues} validate={validate} onSubmit={onSubmit}>
      <Form>
        <p>Don't have an account?<Link to="/signup">Sign Up</Link></p>
        <div className="form-group">
          <label>Email</label>
          <Field type="text" name="email" className="form-control" placeholder="Email" />
          <ErrorMessage name="email" component={FormError} />
        </div>

        <div className="form-group">
          <label>Password</label>
          <Field type="password" name="password" className="form-control" placeholder="Password" />
          <ErrorMessage name="password" component={FormError} />
        </div>
        <div className="text-center">
          <button className="btn btn-primary" type="submit" >Login</button>
        </div>
      </Form>
    </Formik>
  </div>);

  if (props.loading) {
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
});

const mapDispatchToProps = dispatch => {
  return {
  onAuth: (email, password) => dispatch(actions.auth(email, password, false))
}};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
