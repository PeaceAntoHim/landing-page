import Toggle from './Toggle2';
import React, { useState } from 'react';
import styles from '../styles/Mining.module.css';

const SectionTwo = () => {

    const [toggled, setToggled] = useState(false);

   return (
      <>
          <div className={styles.pictureTwo}>
                <p className={styles.text}>Upload Static Preview</p>
                <div className={styles.img} >
                    <input type="file" className={styles.input1} />
                    <img src="/vector.svg" alt="" className={styles.imgOne}/>
                </div>
            </div>

            <div className={styles.pictureThree}>
                <p className={styles.text3}>Upload Static Preview</p>
                <div className={styles.img3}>
                <input 
                    type="file"
                    className={styles.input2}
                />
                    <img src="/vector.svg" alt="img" className={styles.imgThree}/>
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

            <div className={styles.description}>
                <label className={styles.p7}>Description</label>
                <textarea className={styles.textareaDescription} placeholder="Enter Your Description"></textarea>
            </div>

            <div className={styles.Royalities}>
                <label className={styles.p8}>Royalities</label>
                <input type="text" placeholder="Secondary sales (max 10%)" className={styles.inputRoyalities} />
            </div>


            <div className={styles.License}>
                <label className={styles.p4}>License</label>
                <select className={styles.inputLicense}>
                    <option>-- Style Licence --</option>
                    <option>Private Use/Non-commercial</option>
                    <option>Personal public display/Non-commercial explotion</option>
                    <option>Public Display/Non-commercial explotion</option>
                    <option>Repoduction/commercial explotion</option>
                </select>
            </div>

            <div className={styles.category}>
                <label className={styles.p5}>Category</label>
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

            <div className={styles.Styles}>
                <label className={styles.p6}>Styles</label>
                <select className={styles.inputStyles}>
                    <option>-- Choose Styles --</option>
                    <option>Modernism</option>
                    <option>Neoclassicism</option>
                    <option>Futurism</option>
                    <option>Renaissance</option>
                    <option>Romanticism</option>
                    <option>Acient</option>
                    <option>Pop Art</option>
                    <option>Symbolism</option>
                    <option>Pop Art</option>
                    <option>Art Nouveu</option>
                    <option>Folk</option>
                    <option>Ethnic</option>
                    <option>3D</option>
                    <option>Pixel Art</option>
                    <option>Generative</option>
                    <option>Cartoon</option>
                </select>
            </div>

        <div>
            <p className={styles.pLog}>NSFW</p>
            <div>
            <Toggle 
                    onChange={(event) => setToggled(event.target.checked)}
                />
            <p>The switch is{toggled ? "on" : "off" }.</p>
            </div>
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