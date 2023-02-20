import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../signup.css';

const SignUpForm = () => {
  const [selectedRole, setSelectedRole] = useState('');

  const handleRadioChange = (event) => {
    setSelectedRole(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission
  };

  return (
    <Form className='form-custom' onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicFirstName">
        <Form.Label className='form-label-custom'>First Name</Form.Label>
        <Form.Control className='form-field-custom' type="text" placeholder="Enter first name" />
      </Form.Group>

      <Form.Group controlId="formBasicLastName">
        <Form.Label className='form-label-custom'>Last Name</Form.Label>
        <Form.Control className='form-field-custom' type="text" placeholder="Enter last name" />
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Label className='form-label-custom'>Email Address</Form.Label>
        <Form.Control className='form-field-custom' type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group controlId="formBasicPhone">
        <Form.Label className='form-label-custom'>Home Number</Form.Label>
        <Form.Control className='form-field-custom' type="text" placeholder="Enter phone number" />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label className='form-label-custom'>Password</Form.Label>
        <Form.Control className='form-field-custom' type="password" placeholder="Password" />
      </Form.Group>

      <Form.Group controlId="formBasicPasswordConfirmation">
        <Form.Label className='form-label-custom'>Confirm Password</Form.Label>
        <Form.Control className='form-field-custom' type="password" placeholder="Confirm password" />
      </Form.Group>

      <Button className='signup-btn' variant="primary" type="submit">
        Sign Up
      </Button>
      <br/>
      <br/>
      <span className='signin-link-prompt-txt'>Already have an account? <Link className='signin-link-prompt' to="/sigin">Sign in</Link></span>
    </Form>
  );
}

export default SignUpForm;
