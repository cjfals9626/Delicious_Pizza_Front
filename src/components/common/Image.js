import imgStyle from '../../assets/scss/common/Image.module.scss'


function Image({ imgSrc, ...props }) {

    const classNames = [`${imgStyle.container}`];

    if (props.home_carousel) {
        classNames.push(imgStyle.home_carousel);
    }
    if (props.home_content) {
        classNames.push(imgStyle.home_content);
    }


    return (
        <div className={classNames.join(" ")}>
            <div className={imgStyle[`img-container`]}>
                <img src={imgSrc} className={imgStyle.content_img} />
            </div>
        </div>

    );
}

export default Image;