import React, { useState, useRef } from "react";
import { Form, Button, Container, ProgressBar, Row, Col, Card, Modal  } from "react-bootstrap";
import DaumPostcode from "react-daum-postcode";




const SignUp = () => {
    const [step, setStep] = useState(1);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [nickName, setNickName] = useState("");
    
    const [showModal, setShowModal] = useState(false);
    const [selectedAddress, setSelectedAddress] = useState("");
    const [selectedZoneCode, setSelectedZoneCode] = useState("");
    const [detailAddress, setDetailAddress] = useState("");

    const nickNameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const detailAddressRef = useRef(null);

    const steps = [
        { number: 1, title: "Step 1: Email & Password" },
        { number: 2, title: "Step 2: Address" },
    ];

    const handleSubmitStep1 = () => {
        // 단계 1 검증
        if (!nickName || !email || !password) {
            if (!nickName) nickNameRef.current.focus();
            else if (!email) emailRef.current.focus();
            else passwordRef.current.focus();
            alert("닉네임과 이메일, 비밀번호를 모두 입력하세요.");
            return;
        }

        // 다음 단계로 진행
        handleNextStep();
    };

    const handleSubmitStep2 = () => {
        // 단계 2 검증
        if (!selectedAddress || !selectedZoneCode) {
            alert("주소를 선택하세요.");
            return;
        }
        if (!detailAddress) {
            detailAddressRef.current.focus();
            alert("상세 주소를 입력하세요.");
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

    const handleNextStep = () => {
        setStep(step + 1);
    };

    const handlePrevStep = () => {
        setStep(step - 1);
    };

    const handlePostcodeComplete = (data) => {
        setSelectedAddress(data.address);
        setSelectedZoneCode(data.zonecode);
        setShowModal(false);
    };

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    return (
        <Container className="vh-100 align-content-center">
            <Row>
                <Col xs={1} md={3}></Col>
                <Col xs={10} md={6}>
                    <Card body style={{ marginTop: "1rem", borderRadius: "10px" }}>
                        <ProgressBar now={(step / steps.length) * 100} label={`Step ${step}`} />
                        <h1>회원가입</h1>
                        <p>{steps[step - 1].title}</p>
                        <Form>
                            {step === 1 && (
                                <>
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
                                </>
                            )}
                            {step === 2 && (
                                <>
                                    <Form.Group controlId="formBasicAddress">
                                        <Form.Label>주소</Form.Label>
                                        <div className="d-flex">
                                            <Form.Control
                                                type="text"
                                                placeholder="Enter address"
                                                value={selectedAddress}
                                                readOnly
                                                onClick={toggleModal}
                                            />
                                            <Button variant="primary" onClick={toggleModal}>
                                                주소 찾기
                                            </Button>
                                        </div>
                                    </Form.Group>
                                    <Form.Group controlId="formBasicStreetAddress">
                                        <Form.Label>우편번호</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Street address"
                                            value={selectedZoneCode}
                                            readOnly
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicDetailAddress">
                                        <Form.Label>상세 주소</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter detail address"
                                            value={detailAddress}
                                            onChange={(e) => setDetailAddress(e.target.value)}
                                            ref={detailAddressRef}
                                        />
                                    </Form.Group>
                                    <Button variant="success" onClick={handleSubmitStep2}>
                                        회원가입
                                    </Button>
                                    <Button variant="secondary" onClick={handlePrevStep}>
                                        이전
                                    </Button>
                                </>
                            )}
                        </Form>

                    </Card>

                </Col>

                <Col xs={1} md={3}></Col>
            </Row>
            <Modal show={showModal} onHide={toggleModal}>
                <Modal.Header closeButton>
                    <Modal.Title>주소 찾기</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <DaumPostcode onComplete={handlePostcodeComplete} />
                </Modal.Body>
            </Modal>

        </Container>
    );
};

export default SignUp;