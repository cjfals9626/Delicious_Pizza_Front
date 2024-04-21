import React, { useState } from 'react';
import { Form, Button, Container, ProgressBar, Row, Col, Card, Modal } from "react-bootstrap";

const CheckPassword = () => {
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (password === 'password') {
            setError(false);
            setErrorMessage('');
            // Redirect to the next page
        } else {
            setError(true);
            setErrorMessage('Password is incorrect');
        }
    };

    return (
        <Container className="vh-100 align-content-center">
            <Row>

                <Col xs={1} md={3} />
                <Col xs={10} md={6}>

                </Col>
                <Col xs={1} md={3} />

            </Row>
            <h1>Check Password</h1>
            <Form>
                <Form.Group controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                </Form.Group>
                <Button variant="success" className='my-4' onClick={handleSubmit}>
                    비밀번호 확인
                </Button>
                {error && <p style={{ color: 'red'}}>{errorMessage}</p>}
            </Form>
        </Container>
    );
};

export default CheckPassword;