import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

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
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formFirstName">
        <Form.Label>First name</Form.Label>
        <Form.Control type="text" placeholder="Enter first name" />
      </Form.Group>
      
      <Form.Group controlId="formLastName">
        <Form.Label>Last name</Form.Label>
        <Form.Control type="text" placeholder="Enter last name" />
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Form.Group controlId="formBasicRole">
        <Form.Label>Select Role</Form.Label>
        <Form.Check
          type="radio"
          name="role"
          label="Parent"
          value="parent"
          checked={selectedRole === 'parent'}
          onChange={handleRadioChange}
        />
        <Form.Check
          type="radio"
          name="role"
          label="Student"
          value="student"
          checked={selectedRole === 'student'}
          onChange={handleRadioChange}
        />
        <Form.Check
          type="radio"
          name="role"
          label="Instructor"
          value="instructor"
          checked={selectedRole === 'instructor'}
          onChange={handleRadioChange}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Sign Up
      </Button>
    </Form>
  );
}

export default SignUpForm;
