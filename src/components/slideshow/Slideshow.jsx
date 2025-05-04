import React,{useState} from "react";
import "../../styles/components/slideshow.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

function Slideshow({ images, title }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }
    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            (prevIndex - 1 + images.length) % images.length);
    }

    return (
        <div className="slideshow">
            <img src={images[currentIndex]} alt={title} className="slideshow_img" />
            {/*Number of images*/}
            {images.length > 1 && (
            <div className="slideshow-numbers">
                {currentIndex + 1}/{images.length}
            </div>
            )}
            {/*Buttons*/}
            <div>
                <div className="slideshow_buttons">
                    <button className="slideshow_button" onClick={prevSlide}>
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </button>
                    <button className="slideshow_button" onClick={nextSlide}>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                </div>
            </div>
        </div>
        );
    }

    export default Slideshow;
