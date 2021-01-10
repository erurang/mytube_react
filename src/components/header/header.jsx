import React, { memo, useRef } from 'react';
import styles from "./header.module.css"


// header안의 onsearch와 onhomeclick은 Props가 변경될일이 없기 떄문에 Memo 
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
    console.log("header");
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