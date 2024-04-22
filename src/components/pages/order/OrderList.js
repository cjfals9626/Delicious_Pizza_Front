import { useState, useEffect } from "react";
import { Form, Button, Container, ProgressBar, Row, Col, Card } from "react-bootstrap";


const OrderList = () => {

    const [orderList, setOrderList] = useState([]);
    
    useEffect(() => {

        setOrderList([
            {
                orderId: 1,
                orderStatus: "WAITING",
                totalPrice: 30000,
                orderName: "피자1",
                orderTime: "2021-09-01 12:00"
            },
            {
                orderId: 2,
                orderStatus: "COOKING",
                totalPrice: 40000,
                orderName: "피자2",
                orderTime: "2021-09-01 12:00"
            },
            {
                orderId: 3,
                orderStatus: "CANCELED",
                totalPrice: 50000,
                orderName: "피자3",
                orderTime: "2021-09-01 12:00"
            },
            {
                orderId: 4,
                orderStatus: "ON_DELIVERY",
                totalPrice: 60000,
                orderName: "피자4",
                orderTime: "2021-09-01 12:00"
            },
            {
                orderId: 5,
                orderStatus: "COMPLETED",
                totalPrice: 70000,
                orderName: "피자5",
                orderTime: "2021-09-01 12:00"
            }

        ]);

        // fetch("http://localhost:3001/order")
        //     .then((res) => res.json())
        //     .then((data) => {
        //         setOrderList(data);
        //     });
    }, []);

    //상태별 상태 글자 색상 : WAITING(주문대기) - primary, COOKING(조리중) - warning, CANCELED(주문취소) - danger, ON_DELIVERY(배달중) - info, COMPLETED(배달완료) - success
    const orderStatusColor = {
        WAITING: "primary",
        COOKING: "warning",
        CANCELED: "danger",
        ON_DELIVERY: "info",
        COMPLETED: "success"
    };
    const orderStatusText = {
        WAITING: "blue",
        COOKING: "gold",
        CANCELED: "red",
        ON_DELIVERY: "cyan",
        COMPLETED: "green"
    };


    return (
        //새로로 나열
        <>
        <Container>
            <Row>
                <Col>
                    <h1>주문 목록</h1>
                </Col>
            </Row>
            <Row>
                {orderList.map((order, index) => {
                    return (
                        <Col key={index} xs={12} md={6} lg={4}>
                            <Card>
                                <Card.Body>
                                    <Card.Title>{order.orderName}</Card.Title>
                                    <Card.Text>
                                        주문 시간: {order.orderTime}
                                    </Card.Text>
                                    <Card.Text>
                                        주문 금액: {order.totalPrice}원
                                    </Card.Text>
                                    <Card.Text style={{color: orderStatusText[order.orderStatus]}}>
                                        주문 상태: {order.orderStatus}
                                    </Card.Text>
                                    <Button variant="primary">상세보기</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    );
                })}
            </Row>
        </Container>
        <Container>
        <Row>
            {orderList.map((order, index) => {
                return (
                    <Col key={index} xs={12} md={6} lg={4}>
                        <Card>
                            <Card.Body>
                                <Card.Title>{order.orderName}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{order.orderTime}</Card.Subtitle>
                                <Card.Text>
                                    주문번호 : {order.orderId}
                                    <br />
                                    주문금액 : {order.totalPrice}
                                </Card.Text>    
                                <ProgressBar variant={orderStatusColor[order.orderStatus]} now={100} label={`주문상태 : ${order.orderStatus}`} />
                            </Card.Body>
                        </Card>
                    </Col>
                );
            })}
        </Row>
    </Container>
        </>
        
    );
}

export default OrderList;
