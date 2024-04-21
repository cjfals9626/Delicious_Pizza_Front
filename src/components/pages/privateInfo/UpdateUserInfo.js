import React, { useState, useEffect } from 'react';
import { Form, Button, Container, ProgressBar, Row, Col, Card, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


const UpdateUserInfo = () => {
    const [nickName, setNickName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordCheck, setPasswordCheck] = useState("");
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [passwordCheckError, setPasswordCheckError] = useState(false);
    const navigate = useNavigate();


    useEffect(() => {
        // fetch user info
        setEmail('email');
        setNickName('nickName');
        setPassword('password');

    }, []);

    
    const handlePasswordCheck = (e) => {
        if (password !== passwordCheck) {
            setPasswordCheckError(true);
        } else {
            setPasswordCheckError(false);
        }
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        if (password !== passwordCheck) {
            setPasswordCheckError(true);
            return;
        } else {
            setPasswordCheckError(false);
        } 

        // update user info
        // if success
        navigate('/');
        // else
        setError(true);
        setErrorMessage('Update failed');
    };



    return (
        <Container className="vh-100 align-content-center">
            <h1>개인 정보 수정</h1>
            <Form>
                <Form.Group controlId="formNickName" className='my-4'>
                    <Form.Label>닉네임</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter NickName"
                        value={nickName}
                        onChange={(e) => setNickName(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="formEmail" className='my-4'>
                    <Form.Label>이메일</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="formPassword" className='my-4'>
                    <Form.Label>비밀번호</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="formPasswordCheck" className='my-4'>
                    <Form.Label>비밀번호 확인</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Enter Password"
                        value={passwordCheck}
                        onChange={(e) => setPasswordCheck(e.target.value)}
                        onBlur={handlePasswordCheck}
                    />
                    {passwordCheckError && <p style={{ color: 'red' }}>비밀번호가 일치하지 않습니다.</p>}
                </Form.Group>

                <Button variant="success" className='my-4' onClick={handleSubmit}>
                    사용자 정보 수정
                </Button>
                {error && <p style={{ color: 'red' }}>{errorMessage}</p>}
            </Form>
        </Container>
    );
}

export default UpdateUserInfo;