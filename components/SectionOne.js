import styles from '../styles/Content.module.css';

function SectionOne() {
   return (
      <>
          <div className={styles.picture}>
                <p className={styles.text}>Featured Image</p>
                <div className={styles.img} >
                    <input type="file" />
                    <img src="/vector.svg" alt="" className={styles.imgOne}/>
                </div>
            </div>
            
            <div className={styles.inputOne}>
                <label className={styles.p1}>Title</label>
                <img src="/Vector3.svg" alt="important" className={styles.important2} />
                <input className={styles.inputTitle} type="text" placeholder="Enter Your Name"/>
            </div>

            <div className={styles.inputTwo}>
                <img src="/Vector3.svg" alt="important" className={styles.important3} />
                <label className={styles.p2}>URL</label>
                <input type="text" className={styles.inputURL} placeholder="Enter Your URL"/>
            </div>

            <div className={styles.inputThree}>
                <img src="/Vector3.svg" alt="important" className={styles.important4}/>
                <label className={styles.p3}>Category</label>
                <select className={styles.inputCategory}>
                    <option>-- Choose Category --</option>
                    <option>Abstract</option>
                    <option>Expressionism</option>
                    <option>Cubism</option>
                    <option>Realism</option>
                    <option>Surealism</option>
                    <option>Impressionism</option>
                    <option>Hyperrealism</option>
                    <option>Photography</option>
                    <option>Digital</option>
                </select>
            </div>
      </>
   )
}

export default SectionOne;