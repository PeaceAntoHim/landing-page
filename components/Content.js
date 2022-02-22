import Footer from '../components/Footer';
import styles from '../styles/Content.module.css';
import SectionOne from '../components/SectionOne';

function Content() {
    return (
        <>
            <SectionOne />
            <div className={styles.textarea}>
                <img src="/Vector3.svg" alt="important" className={styles.important5} />
                <p className={styles.pTxtarea}>Description</p>
                <textarea className={styles.inputTextarea} placeholder="Enter your text"/>
            </div>

            <div className={styles.short}>
                <p className={styles.pShort}>Short Description</p>
                <textarea className={styles.inputShort} placeholder="Enter your text"/>
            </div>

            <label className={styles.labelLinks}>Links</label>
            <div className={styles.links}>
                <img src="/internet.svg" alt="intenet" className={styles.Icon} />
                <input type="text" className={styles.inputLinks} placeholder="input your links"/>
            </div>

            <div className={styles.discord}>
                <img src="/discord.svg" alt="discord" className={styles.Icon}/>
                <input type="text" className={styles.inputDiscord} placeholder="input your discord" />
            </div>

            <div className={styles.twitter}>
                <img src="/twitter.svg" alt="twitter" className={styles.Icon}/>
                <input type="text" className={styles.inputTwitter} placeholder="input your tiwtter" />    
            </div>

            <div className={styles.instagram}>
                <img src="/ig.svg" alt="ig" className={styles.Icon} />
                <input type="text" className={styles.inputInstagram} placeholder="input your instagram" />
            </div>

            <div className={styles.telegram}>
                <img src="/tele.svg" alt="tele" className={styles.Icon}/>
                <input type="text" className={styles.inputTelegram} placeholder="input your telegram"/>
            </div>
            <Footer />
        </>
        
        
    )
}

export default Content;