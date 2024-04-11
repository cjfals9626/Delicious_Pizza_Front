import Carousel from 'react-bootstrap/Carousel';
import Image from '../../common/Image';
import carouselStyle from "../../../assets/scss/home/Carousel.module.scss"

function HomeCarousel() {

    const imgsAndText = [
        {
            imgSrc: `https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_960_720.jpg`,
            text: `First slide label`,
            content: `Nulla vitae elit libero, a pharetra augue mollis interdum.`
        },
        {
            imgSrc: `https://images.unsplash.com/photo-1590947132387-155cc02f3212?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
            text: `Second slide label`,
            content: `Nulla vitae elit libero, a pharetra augue mollis interdum.`
        },
        {
            imgSrc: `https://images.unsplash.com/photo-1601924582970-9238bcb495d9?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
            text: `Third slide label`,
            content: `Nulla vitae elit libero, a pharetra augue mollis interdum.`
        }
        
    ]

    return (
            <Carousel className={carouselStyle.container} variant="dark">

                {imgsAndText.map((imgAndText, index) => {
                    return (
                        <Carousel.Item key={index} interval={20000}>
                            <Image imgSrc={imgAndText.imgSrc} home_carousel/>
                            <Carousel.Caption>
                                <h3>{imgAndText.text}</h3>
                                <p>{imgAndText.content}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    )
                })}
            </Carousel>

    );
}

export default HomeCarousel;