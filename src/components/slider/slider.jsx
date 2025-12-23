import { useEffect, useState } from 'react';
import './slider.css';
import page1 from '../../images/page1.jpg';
import page2 from '../../images/page2.jpg';
import page3 from '../../images/page3.jpg';
import page4 from '../../images/page4.jpg';


const slidesData = [
    page1,
    page2,
    page3,
    page4

]

function slider() {
    const [ slideIndex, setSlideIndex ] = useState(0);

    useEffect(() => {
        const intervalidId = setInterval(() => {
            setSlideIndex(prev => (prev + 1) % slidesData.length);
        }, 3500);

        return () => clearInterval(intervalidId);
    }, []);

const prevSlide = () => {
  setSlideIndex(prev => (prev - 1 + slidesData.length) % slidesData.length);
}

const nextSlide = () => {
  setSlideIndex(prev => (prev + 1) % slidesData.length);
}

    return (
        <div className='slider'>
            {slidesData.map((src, index) => (
                <img
                key = {index}
                src={src}
                alt={`Slide ${index}`}
                className={`slide ${index === slideIndex ? "displaySlide" : ""}`}
                />
            ))}
            <div className='buttons'>
                <button className="prev" onClick={prevSlide}>&#10094;</button>
                <button className="next" onClick={nextSlide}>&#10095;</button>
            </div>
        </div>
    )
}

export default slider;