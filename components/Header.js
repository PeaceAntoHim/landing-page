import styles from '../styles/Home.module.css';
import { SearchIcon } from '@heroicons/react/outline';
import { useRouter} from 'next/router';

function Header() {
    const Router = useRouter();

    return (
        <header className={styles.navFrame}>
            <div>
                <img 
                    src="/Logo 2.svg"
                    className={styles.Logo}
                    onClick={() => Router.push('/')}
                />
            </div>
            
            {/* Search */}
            <div className={styles.frameSearch}>
                <input type="text" className={styles.search} placeholder="Search Item" />
                <SearchIcon className={styles.Icon}/>
            </div>

            {/* Right */}

            <div className={styles.right}>
                <div 
                    className={styles.groupOne}
                    onClick={() => Router.push('/mining')}
                >
                    Explore
                    <img 
                        src="/Vector1.svg" 
                        alt="dropdown"
                        className={styles.dropdown}
                    />
                </div>

                <div 
                    className={styles.groupTwo}
                    onClick={() => Router.push('/mining')}
                >
                    Create
                </div>

                <div className={styles.groupThree}>
                    <img src="/Ellipse 2.png" alt="elipse" className={styles.thumbnail} />
                </div>
                
                <button className={styles.buttonNav}><p className={styles.text}>Select Wallet</p></button>
            </div>  

        </header>
    )
}

export default Header;