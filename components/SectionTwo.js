import styles from '../styles/Mining.module.css';

function SectionTwo() {
   return (
      <>
          <div className={styles.pictureTwo}>
                <p className={styles.text}>Featured Image</p>
                <div className={styles.img} >
                    <img src="/vector.svg" alt="" className={styles.imgOne}/>
                </div>
            </div>
            
            <div className={styles.inputOneS}>
                <label className={styles.p1}>Title</label>
                <input className={styles.inputTitleS} type="text" placeholder="Enter Your Name"/>
            </div>

            <div className={styles.inputTwoS}>
                <label className={styles.p2}>URL</label>
                <input type="text" className={styles.inputURLS} placeholder="Enter Your URL"/>
            </div>

            <div className={styles.inputThreeS}>
                <label className={styles.p3}>Category</label>
                <select className={styles.inputCategoryS}>
                    <option>-- Choose Category --</option>
                    <option>Chinese Traditional</option>
                    <option>Chinese Simplified</option>
                </select>
            </div>

            <div >

            </div>
      </>
   )
}

export default SectionTwo;