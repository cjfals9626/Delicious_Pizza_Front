import carouselImg from '../../../assets/scss/home/CarouselImage.module.scss'

function CarouselImage({imgSrc}) {
    return (
        <div className={carouselImg.container}>
            <div className={carouselImg[`coslide-container`]}>
                <img src={imgSrc} className={carouselImg.pizza_img} alt="피자 이미지" />
            </div>
        </div>
        
    );
}

export default CarouselImage;