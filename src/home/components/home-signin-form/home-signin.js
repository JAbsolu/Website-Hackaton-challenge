import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './home-signin.css';

const HomeSignin = () => {
    return (
        <Container className="home-form-container">
            <Form action='./dashboard' method='post' className='signin-form'>
                <Form.Group className="mb-3" controlId='FormBasicEmail'>
                    <Form.Label className='form-label-custom'>Email or Username</Form.Label>
                    <Form.Control className='form-field-custom' type='email' placeholder='Enter email or username'></Form.Control>
                    <Form.Text className='text-danger'></Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId='FormBasicPassword'>
                    <Form.Label className='form-label-custom'>Password</Form.Label>
                    <Form.Control className='form-field-custom' type='password' placeholder='Enter password'></Form.Control>
                    <Form.Text className='text-danger'></Form.Text>
                </Form.Group>
                
                <div className='d-flex justify-content-between'>
                    <Button type='submit' className='signin-submit'>
                        Sign in
                    </Button>

                    <Link to='/signup' className='text-decoration-none'>
                        <span className='fw-bold text-dark link'>Create new account</span>
                    </Link>
                </div>  
            </Form>
        </Container>
    )
};

export default HomeSignin;