import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LoginForm from "./LoginForm";



const Login = () => {

    // const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Email: ", email);
        console.log("Password: ", password);
    };

    return (
        <Container className="vh-100">
            <Row>
                <Col xs={1} md={3}></Col>
                <Col xs={10} md={6}>
                    <Card body style={{ marginTop: "1rem", borderRadius: "10px" }}>
                        <h3>피자라치</h3>
                        <h5>로그인</h5>
                        <LoginForm
                            email={email}
                            password={password}
                            handleEmailChange={handleEmailChange}
                            handlePasswordChange={handlePasswordChange}
                            handleSubmit={handleSubmit}
                        />
                    </Card>
                </Col>
                <Col xs={1} md={3}></Col>
            </Row>
        </Container>

    );
}
export default Login;