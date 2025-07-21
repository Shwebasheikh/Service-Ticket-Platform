import React, { useState } from 'react';
import { Container, Form, Button, Card, Row, Col, Alert, Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Login.css'; // Assuming you have a CSS file for styling
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('User');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const API_URL = 'https://your-api-base-url.com/api/auth/login';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }

    setIsLoading(true);
    
    try {
      const response = await axios.post(
        API_URL,
        { email, password, role },
        { headers: { 'Content-Type': 'application/json' } }
      );

      const { token, userData } = response.data;
      localStorage.setItem('authToken', token);
      localStorage.setItem('userData', JSON.stringify(userData));
      window.location.href = role === 'User' ? '/dashboard' : '/employee-portal';
      
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container className="login-container">
      <Row className="justify-content-center align-items-center min-vh-100">
        <Col md={5} sm={8}>
          <Card className="login-card">
            <Card.Body className="p-4">
              <div className="text-center mb-4">
                <h2 className="fw-bold mb-2">Welcome Back</h2>
                <p className="text-muted">Sign in to your account</p>
              </div>
              
              {/* Role Selection - Only User and Employee */}
              <div className="role-selection mb-4">
                <h6 className="mb-3 text-center">I am a</h6>
                <div className="d-flex gap-3 justify-content-center">
                  <Button 
                    variant={role === 'User' ? 'primary' : 'outline-primary'} 
                    onClick={() => setRole('User')}
                    className={`role-btn ${role === 'User' ? 'active' : ''}`}
                    disabled={isLoading}
                  >
                    User
                  </Button>
                  <Button 
                    variant={role === 'Employee' ? 'primary' : 'outline-primary'} 
                    onClick={() => setRole('Employee')}
                    className={`role-btn ${role === 'Employee' ? 'active' : ''}`}
                    disabled={isLoading}
                  >
                    Employee
                  </Button>
                </div>
              </div>
              
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control 
                    type="email" 
                    placeholder="Enter your email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="login-input"
                    disabled={isLoading}
                  />
                </Form.Group>
                
                <Form.Group className="mb-4">
                  <Form.Label>Password</Form.Label>
                  <Form.Control 
                    type="password" 
                    placeholder="Enter your password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="login-input"
                    disabled={isLoading}
                  />
                </Form.Group>
                
                {error && (
                  <Alert variant="danger" className="text-center py-2 mb-3">
                    <small>{error}</small>
                  </Alert>
                )}
                
                <Button 
                  variant="primary" 
                  type="submit" 
                  className="w-100 py-2 mb-3 login-btn"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <Spinner as="span" animation="border" size="sm" role="status" />
                  ) : (
                    'Sign In'
                  )}
                </Button>
                
                <div className="text-center">
                  <p className="text-muted small mb-0">
                    Don't have an account? <a href="/SignUp" className="text-primary">Sign Up</a>
                  </p>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
















// ----------------------------------------------------------------------------------------------
