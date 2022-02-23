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

            <div className={styles.License}>
                <label className={styles.p4}>License</label>
                <select className={styles.inputLicense}>
                    <option>-- Style Licence --</option>
                    <option>Chinese Traditional</option>
                    <option>Chinese Simplified</option>
                </select>
            </div>

            <div className={styles.category}>
                <label className={styles.p5}>Category</label>
                <select className={styles.inputCategory}>
                    <option>-- Choose Category --</option>
                    <option>Chinese Traditional</option>
                    <option>Chinese Simplified</option>
                </select>
            </div>

            <div className={styles.Styles}>
                <label className={styles.p6}>Styles</label>
                <select className={styles.inputStyles}>
                    <option>-- Choose Styles --</option>
                    <option>Chinese Traditional</option>
                    <option>Chinese Simplified</option>
                </select>
            </div>

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
        </>
    )
}

export default SectionTwo;