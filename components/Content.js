import styles from '../styles/Content.module.css';
import SectionOne from '../components/SectionOne';

function Content() {
    return (
        <>
            <SectionOne />
            <div className={styles.textarea}>
                <p className={styles.pTxtarea}>Description</p>
                <textarea className={styles.inputTextarea} placeholder="Enter your text"/>
            </div>

            <div className={styles.short}>
                <p className={styles.pShort}>Short Description</p>
                <textarea className={styles.inputShort} placeholder="Enter your text"/>
            </div>

            <div className={styles.links}>
                <label className={styles.labelLinks}>Links</label>
                <input type="text" className={styles.inputLinks} placeholder="input your links"/>
            </div>

            <div className={styles.discord}>
                <input type="text" className={styles.inputDiscord} placeholder="input your discord" />
            </div>

            <div className={styles.twitter}>
                <input type="text" className={styles.inputTwitter} placeholder="input your tiwtter" />    
            </div>

            <div className={styles.instagram}>
                <input type="text" className={styles.inputInstagram} placeholder="input your instagram" />
            </div>

            <div className={styles.telegram}>
                <input type="text" className={styles.inputTelegram} placeholder="input your telegram"/>
            </div>

            <p className={styles.pLog}>NSFW</p>
            {/* togle */}
            <p className={styles.faQ}>Expicit content ?</p>

            <div className={styles.notice}>
                <p className={styles.note}>Note</p>
                <p className={styles.box}>Make sure that all information is correct and double-check all spelling before you mint your NFT because once the process is complete you CANNOT edit your NFT.</p>
            </div>

            <button className={styles.btn}><p className={styles.pBtn}>Create</p></button>
            
        </>
        
        
    )
}

export default Content;