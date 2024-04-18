import React, { useState, useRef, useEffect } from "react";
import { Form, Button, Container, ProgressBar, Row, Col, Card, Modal } from "react-bootstrap";
import DaumPostcode from "react-daum-postcode";
import Image from "../../common/Image";

const PizzaOrder = () => {
    const [step, setStep] = useState(1);

    // 피자 데이터 저장
    /*     private Long doughId;
    private Long edgeId;
    private List<Long> toppings;
    private String address;
    private String zoneCode;
    private String detailAddress;
    */
    const [doughId, setDoughId] = useState(0);
    const [edgeId, setEdgeId] = useState(0);
    const [toppings, setToppings] = useState([]);
    const [address, setAddress] = useState("");
    const [zoneCode, setZoneCode] = useState("");
    const [detailAddress, setDetailAddress] = useState("");

    const [showModal, setShowModal] = useState(false);
        

    //도우 선택
    const handleSelectDough = (doughId) => {
        setDoughId(doughId);
        handleNextStep();
    };


    const steps = [
        { number: 1, title: "Step 1: 도우" },
        { number: 2, title: "Step 2: 토핑" },
        { number: 3, title: "Step 3: 엣지" },
        { number: 4, title: "Step 4: 주소 입력" },
    ];

    const doughs = [
        { id: 1, name: "피자1", price: 10000 },
        { id: 2, name: "피자2", price: 20000 },
        { id: 3, name: "피자3", price: 30000 },
        { id: 4, name: "피자3", price: 30000 },
        { id: 5, name: "피자3", price: 30000 },
        { id: 6, name: "피자3", price: 30000 },
        { id: 7, name: "피자3", price: 30000 },
    ];

    //토핑
    const tmpToppings = [
        { id: 1, name: "토핑1", price: 1000 },
        { id: 2, name: "토핑2", price: 2000 },
        { id: 3, name: "토핑3", price: 3000 },
        { id: 4, name: "토핑4", price: 4000 },
        { id: 5, name: "토핑5", price: 5000 },
        { id: 6, name: "토핑6", price: 6000 },
        { id: 7, name: "토핑7", price: 7000 },
    ];

    const handleSelectTopping = (toppingId) => {
        const index = toppings.indexOf(toppingId);
        if (index === -1) {
            setToppings([...toppings, toppingId]);
        } else {
            setToppings(toppings.filter((id) => id !== toppingId));
        }
    }

    //선택한 토핑이 toppings에 있다면 토핑 Card의 색을 초록색으로 변경
    const isSelectedTopping = (toppingId) => {
        return toppings.indexOf(toppingId) !== -1;
    }

    //엣지
    const edges = [
        { id: 1, name: "엣지1", price: 1000 },
        { id: 2, name: "엣지2", price: 2000 },
        { id: 3, name: "엣지3", price: 3000 },
        { id: 4, name: "엣지4", price: 4000 },
        { id: 5, name: "엣지5", price: 5000 },
        { id: 6, name: "엣지6", price: 6000 },
        { id: 7, name: "엣지7", price: 7000 },
    ];

    const handleSelectEdge = (edgeId) => {
        setEdgeId(edgeId);
        handleNextStep();
    }

    //주소 입력
    const handlePostcodeComplete = (data) => {
        setAddress(data.address);
        setZoneCode(data.zonecode);
        setShowModal(false);
    };

    const toggleModal = () => {
        setShowModal(!showModal);
    };


    const handleNextStep = () => {
        setStep(step + 1);
    };

    const handlePrevStep = () => {
        setStep(step - 1);
    };

    //주문하기
    const handleSubmit = () => {
        console.log("피자 주문 정보:", { doughId, edgeId, toppings, address, zoneCode, detailAddress });
    };




    return (
        <Container className="vh-100 align-content-center" style={{ overflow: 'auto' }}>
            <h1>피자 주문</h1>
            <Row>
                <ProgressBar now={(step / steps.length) * 100} label={steps[step - 1].title} />
                <p>{steps[step - 1].title}</p>
            </Row>
            <Row>
                {step === 1 && (
                    <>
                        <Container className="dough container">
                            <Row>
                                {doughs.map((dough) => (
                                    <Col key={dough.id} xs={6} md={3} style={{ paddingTop: 10, paddingBottom: 10 }}>
                                        <Card>
                                            {/* <Image imgSrc="https://via.placeholder.com/150" /> */}
                                            <Card.Img variant="top" src="https://via.placeholder.com/150" />
                                            <Card.Body>
                                                <Card.Title>{dough.name}</Card.Title>
                                                <Card.Text>{dough.price}원</Card.Text>
                                                <Button variant="success" onClick={() => handleSelectDough(dough.id)}>선택</Button>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                ))}
                            </Row>
                        </Container>
                    </>
                )}

                {step === 2 && (
                    <>
                        <Container className="topping container">
                        <Button variant="secondary" onClick={handlePrevStep}>
                                        이전
                                    </Button>
                            <Button variant="success" onClick={handleNextStep}>
                                        다음
                            </Button>
                            <Row>
                                {tmpToppings.map((topping) => (
                                    <Col key={topping.id} xs={6} md={3} style={{ paddingTop: 10, paddingBottom: 10 }}>
                                        <Card style={{ backgroundColor: isSelectedTopping(topping.id) ? 'lightgreen' : 'white' }}>
                                            <Card.Img variant="top" src="https://via.placeholder.com/150" />
                                            <Card.Body>
                                                <Card.Title>{topping.name}</Card.Title>
                                                <Card.Text>{topping.price}원</Card.Text>
                                                <Button variant="success" onClick={() => handleSelectTopping(topping.id)}>선택</Button>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                ))}
                            </Row>
                            
                        </Container>
                    </>
                )}
                {step === 3 && (
                    <>
                        <Container className="edge container">
                            <Row>
                                {edges.map((edge) => (
                                    <Col key={edge.id} xs={6} md={3} style={{ paddingTop: 10, paddingBottom: 10 }}>
                                        <Card>
                                            <Card.Img variant="top" src="https://via.placeholder.com/150" />
                                            <Card.Body>
                                                <Card.Title>{edge.name}</Card.Title>
                                                <Card.Text>{edge.price}원</Card.Text>
                                                <Button variant="success" onClick={() => handleSelectEdge(edge.id)}>선택</Button>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                ))}
                            </Row>
                        </Container>
                    </>
                )}
                {step === 4 && (
                    <>
                        <Form>
                            <Form.Group controlId="formBasicAddress">
                                <Form.Label>주소</Form.Label>
                                <div className="d-flex">
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter address"
                                        value={address}
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
                                    value={zoneCode}
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
                                />
                            </Form.Group>
                            
                            <Button variant="success" onClick={handleSubmit}>
                                주문하기
                            </Button>
                            <Button variant="secondary" onClick={handlePrevStep}>
                                이전
                            </Button>
                        </Form>
                    </>
                )}

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
}

export default PizzaOrder;