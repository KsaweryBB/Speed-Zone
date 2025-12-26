import { useEffect, useState } from 'react';
import styles from './slider.module.css'
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

function Slider() {
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
        <div className={styles.slider}>
            {slidesData.map((src, index) => (
                <img
                key = {index}
                src={src}
                alt={`Slide ${index}`}
                className={`${styles.slide} ${index === slideIndex ? styles.displaySlide : ""}`}
                />
            ))}
            <div className={styles.buttons}>
                <button className={styles.prev} onClick={prevSlide}>&#10094;</button>
                <button className={styles.next} onClick={nextSlide}>&#10095;</button>
            </div>
        </div>
    )
}

export default Slider;