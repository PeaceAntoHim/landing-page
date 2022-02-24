import React from 'react';
import styles from '../styles/Content.module.css';

function Toggle({ onChange }) {
    return (
        <>
            <input type="checkbox" onChange={onChange} />
            <span className={styles.toggle} />
        </>
    )
}

export default Toggle;