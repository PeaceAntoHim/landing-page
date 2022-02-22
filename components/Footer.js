import styles from '../styles/Content.module.css';

function Footer() {
    return (
        <div>
            <p className={styles.pLog}>NSFW</p>
            <img src="/Vector2.svg" className={styles.togle} alt="toggle" />
            <p className={styles.faQ}>Expicit content ?</p>

            <div className={styles.notice}>
                <p className={styles.note}>Note</p>
                <p className={styles.box}>Make sure that all information is correct and double-check all spelling before you mint your NFT because once the process is complete you CANNOT edit your NFT.</p>
            </div>

            <button className={styles.btn}><p className={styles.pBtn}>Create</p></button>
        </div>
    )
}

export default Footer;