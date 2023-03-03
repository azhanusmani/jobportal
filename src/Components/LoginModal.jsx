import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Col, Modal, Form, Row } from 'react-bootstrap';
import axios from 'axios';

import { setLocalStorage } from '../Utils/localStorage';

const LoginModal = () => {
  const navigate = useNavigate();

  const [validated, setValidated] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [responseError, setResponseError] = useState(null);

  useEffect(() => {
    setResponseError(null);
  }, [email, password]);

  const onLogin = async (event) => {
    if (!email.length || !password.length) return;
    event.preventDefault();

    const payload = {
      email,
      password,
    };
    const url = `${import.meta.env.VITE_BASE_API_HOST}/api/v1/auth/login`;

    try {
      const { data } = await axios({
        method: 'post',
        url,
        data: payload,
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const token = data?.data?.token;

      setLocalStorage('authToken', token);
      navigate('/jobs');
    } catch (err) {
      const errMsg =
        err?.response?.data?.message || 'Something went wrong please try again';
      setResponseError(errMsg);
      setValidated(false);
    }
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
    onLogin(event);
  };

  return (
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                isInvalid={email && email.length === 0}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid email!
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please enter your password!
              </Form.Control.Feedback>
            </Form.Group>

            {responseError && responseError.length && (
              <Row>
                <Col>
                  <small className="d-flex flex-row-reverse text-danger">
                    {responseError}
                  </small>
                </Col>
              </Row>
            )}

            <Button type="submit">Login</Button>
          </Form>
        </Modal.Body>
      </Modal.Dialog>
    </div>
  );
};

export default LoginModal;
