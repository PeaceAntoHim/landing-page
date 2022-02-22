import styles from '../styles/Content.module.css';

function Content() {
    return (
        <>
            <div className={styles.picture}>
                <p className={styles.text}>Featured Image</p>
                <img src="" alt="" className={styles.img} />
            </div>
            
            <div className={styles.inputOne}>
                <label className={styles.p1}>Title</label>
                <input className={styles.inputTitle} type="text" placeholder="Enter Your Name"/>
            </div>

            <div className={styles.inputTwo}>
                <label className={styles.p2}>URL</label>
                <input type="text" className={styles.inputURL} placeholder="Enter Your URL"/>
            </div>

            <div className={styles.inputThree}>
                <label className={styles.p3}>Category</label>
                <select className={styles.inputCategory}>
                    <option>-- Choose Category --</option>
                    <option>Chinese Traditional</option>
                    <option>Chinese Simplified</option>
                </select>
            </div>

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
        </>
        
        
    )
}

export default Content;