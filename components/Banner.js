import styles from '../styles/Section.module.css';

function Banner() {
    return (
        <div className={styles.Banner}>
            <img src="dsds" alt="" className={styles.frameBanner} />
            <div className={styles.pictureBanner}>
                <img src="sds" alt="" className={styles.circleBanner} />
            </div>
        </div>        
    )
}

export default Banner;