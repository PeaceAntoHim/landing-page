import { useRef } from 'react';
import styles from '../styles/Section.module.css';

function Banner() {
    const inputRef = useRef(null);

    return (
        <div className={styles.Banner}>
            <input 
                type="file" 
                className={styles.frameBanner}
            />
            <div className={styles.pictureBanner}>
                <input
                    ref={inputRef} 
                    type="file" 
                    className={styles.circleBanner}
                />
                <img src="/Vector.svg" className={styles.circleBanner1} />
            </div>
        </div>        
    )
}

export default Banner;