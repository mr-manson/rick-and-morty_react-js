import { data } from "./data";
import styles from "./Slider.module.scss";
import { useEffect, useState } from "react";
import cn from "classname";

const Slider = () => {
    const [items] = useState(data);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const lastIndex = items.length - 1;
        if (currentIndex < 0) {
            setCurrentIndex(lastIndex);
        }
        if (currentIndex > lastIndex) {
            setCurrentIndex(0);
        }
    }, [currentIndex, items]);

    useEffect(() => {
        const slider = setInterval(() => setCurrentIndex(prevState => prevState + 1), 5000);
        return () => {
            clearInterval(slider);
        }
    }, [currentIndex]);

    return (
        <div className={styles.container}>
            <div className={styles.navigate} onClick={() => setCurrentIndex(prevState => prevState - 1)}>&lsaquo;</div>
            <div className={styles.window}>
                {items.map((item, index) => {
                    let position = "nextSlide";
                    if (index === currentIndex) {
                        position = "activeSlide";
                    }
                    if (index === currentIndex - 1 || (currentIndex === 0 && index === items.length - 1)) {
                        position = "prevSlide";
                    }

                    return (
                        <div key={index} className={`${styles.item} ${styles[position]}`}>
                    {item.data}</div>
                    )
                })}
            </div>
            <div className={styles.navigate} onClick={() => setCurrentIndex(prevState => prevState + 1)}>&rsaquo;</div>
        </div>
    );
};

export default Slider;