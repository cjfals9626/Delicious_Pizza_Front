import React, { useState, useRef } from "react";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";



const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [nickName, setNickName] = useState("");


    const nickNameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);


    const handleSubmitStep1 = () => {
        // 단계 1 검증
        if (!nickName || !email || !password) {
            if (!nickName) nickNameRef.current.focus();
            else if (!email) emailRef.current.focus();
            else passwordRef.current.focus();
            alert("닉네임과 이메일, 비밀번호를 모두 입력하세요.");
            return;
        }

        // 제출
        submitData();
    };


    const submitData = () => {
        // 이 함수에서는 서버로 회원가입 정보를 전송
        console.log("회원가입 정보:", { email, password });
        // 여기서 서버로 데이터를 전송하거나 다음 단계로 이동
    };


    return (
        <Container className="vh-100 align-content-center">
            <Row>
                <Col xs={1} md={3}></Col>
                <Col xs={10} md={6}>
                    <Card body style={{ marginTop: "1rem", borderRadius: "10px" }}>
                        <h1>회원가입</h1>
                        <Form>
                                    <Form.Group controlId="formBasicNickName">
                                        <Form.Label>닉네임</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter Nick Name"
                                            value={nickName}
                                            onChange={(e) => setNickName(e.target.value)}
                                            ref={nickNameRef}
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Email 주소</Form.Label>
                                        <Form.Control
                                            type="email"
                                            placeholder="Enter email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            ref={emailRef}
                                        />
                                    </Form.Group>

                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>비밀번호</Form.Label>
                                        <Form.Control
                                            type="password"
                                            placeholder="Password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            ref={passwordRef}
                                        />
                                    </Form.Group>
                                    <Button variant="success" onClick={handleSubmitStep1}>
                                        다음
                                    </Button>
                        </Form>

                    </Card>

                </Col>

                <Col xs={1} md={3}></Col>
            </Row>

        </Container>
    );
};

export default SignUp;