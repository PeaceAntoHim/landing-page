import styles from '../styles/Content.module.css';
import SectionOne from '../components/SectionOne';

function Content() {
    
    return (
        <>
            <SectionOne />
            <div className={styles.textarea}>
                <img src="/Vector3.svg" alt="important" className={styles.important5} />
                <p className={styles.pTextarea}>Description</p>
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
            <div>
            <p className={styles.pLog}>NSFW</p>
            <img 
                src=""
                className={styles.togle}
                alt="toggle"
            />
            <p className={styles.faQ}>Expicit content ?</p>

            <div className={styles.notice}>
                <p className={styles.note}>Note</p>
                <p className={styles.box}>Make sure that all information is correct and double-check all spelling before you mint your NFT because once the process is complete you CANNOT edit your NFT.</p>
            </div>

            <button className={styles.btn}><p className={styles.pBtn}>Create</p></button>
        </div>
        </>
        
        
    )
}

export default Content;