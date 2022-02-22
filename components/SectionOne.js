import styles from '../styles/Content.module.css';

function SectionOne() {
   return (
      <>
          <div className={styles.picture}>
                <p className={styles.text}>Featured Image</p>
                <div className={styles.img} >
                    <img src="/vector.svg" alt="" className={styles.imgOne}/>
                </div>
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
      </>
   )
}

export default SectionOne;