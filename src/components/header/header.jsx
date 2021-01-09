import React, { memo, useRef } from 'react';
import styles from "./header.module.css"


const Header = memo(({ onSearch, onHomeClick }) => {

    const inputRef = useRef()

    const handleSearch = () => {
        const value = inputRef.current.value;
        onSearch(value);
    }

    const onKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    }

    return (
        <header className={styles.header}>
            <div className={styles.logo} onClick={onHomeClick}>
                <h2 className={styles.title}>Youtube</h2>
            </div>
            <input onKeyPress={onKeyPress} className={styles.input} ref={inputRef} type="text" placeholder="Search.."></input>
        </header>
    )

})

export default Header;