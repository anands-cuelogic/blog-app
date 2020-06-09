import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Formik, Form, ErrorMessage, Field } from 'formik';

import TextError from '../../UI/FormError/FormError';
import './EditPost.css';
import Spinner from '../../UI/Spinner/Spinner';

function EditPost(props) {
  console.log(props);
  
  const initialValues = {
    title  : props.post ? props.post.title  : '',
    content: props.post ? props.post.content: ''
  };

  const onSubmit = values => {
    props.editpost(values.title, values.content, props.post.id, props.post.key, 'PUT');
    props.onHide();
  }

  const validate = values => {
    let errors = {};

    if (!values.title) {
      errors.title = 'Required';
    };

    if (!values.content) {
      errors.content = 'Required';
    }
    if(values.content && values.content.length < 20) {
      errors.content = 'Content must be minimum 20 words'
    }

    return errors;
  }

  let form = <Spinner />;

  if(!props.loading) {
    form = (<Formik initialValues={initialValues} validate={validate} onSubmit={onSubmit}>
      <Form>
        <div className="form-group">
          <label>Title</label>
          <Field type="text" name="title" className="form-control" placeholder="Title" />
          <ErrorMessage name="title" component={TextError} />
        </div>

        <div className="form-group">
          <label>Content</label>
          <Field as="textarea" name="content" rows="3" className="form-control" placeholder="Content" />
          <ErrorMessage name="content" component={TextError} />
        </div>
        <div className="form-btn">
        <Button  variant="danger"  onClick={props.onHide}>Close</Button>
        <Button type="submit" className="create-blog-btn">Save changes</Button>
        </div>
      </Form>
    </Formik>);
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton style={{background: "black", color:"#fff !important"}}>
        <Modal.Title id="contained-modal-title-vcenter" >
          <h3 style={{color: "#fff", fontWeight:"600"}}>Edit <span style={{color:"#19B3D3"}}>Post</span></h3>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {form}
      </Modal.Body>
    </Modal>
  );
}

export default EditPost;