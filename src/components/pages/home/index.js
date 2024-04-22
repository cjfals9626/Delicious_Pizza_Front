
import HomeCarousel from './Carousel';
import Image from '../../common/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import homeStyle from "../../../assets/scss/home/index.module.scss"
import Box from '../../common/Box'
import Button from 'react-bootstrap/Button';


function Home() {

    const contentImg = [
        "https://cdn.pixabay.com/photo/2017/12/10/14/47/pizza-3010062_1280.jpg",
        "https://cdn.pixabay.com/photo/2017/08/06/06/43/pizza-2589575_1280.jpg",
        "https://cdn.pixabay.com/photo/2024/04/03/20/39/ai-generated-8673811_1280.png"
    ]

    return (
        <div>
            <HomeCarousel />

            <div className={homeStyle.divide_horizen} />

            <Container className={homeStyle.home_content}>
                <Row>
                    <Col className={homeStyle.title}><h1>주요 메뉴</h1></Col>
                </Row>
                <Row>
                    <Col>
                        <Box primary>
                            <Container>
                                <Row>
                                    <h3>페페로니 피자</h3>
                                </Row>
                                <Row>
                                    <Image imgSrc={contentImg[0]} home_content />
                                </Row>
                                <Button variant="success"  >주문하기</Button>
                            </Container>
                        </Box>
                    </Col>
                    <Col>
                        <Box primary>
                            <Container>
                                <Row>
                                    <h3>불고기 피자</h3>
                                </Row>
                                <Row>
                                    <Image imgSrc={contentImg[1]} home_content />
                                </Row>
                                
                                <Button variant="success"  >주문하기</Button>
                                
                                
                            </Container>
                        </Box>
                    </Col>
                    <Col>
                        <Box primary>
                            <Container>
                                <Row>
                                    <h3>콤비네이션 피자</h3>
                                </Row>
                                <Row>
                                    <Image imgSrc={contentImg[2]} home_content />
                                </Row>
                                <Button variant="success"  >주문하기</Button>
                            </Container>
                        </Box>
                    </Col>
                </Row>
            </Container>
        </div>

    );
}

export default Home;