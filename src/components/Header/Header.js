import React from 'react';
import SearchBar from '../UI/SearchBar/SearchBar';
import styles from './Header.module.scss';

const header = () => (
    <header className={`${styles.header} p-sm-5 py-5`}>
        <div className={styles.header__bg}></div>
        <h1 className={styles.hero}>It's the food you love, delivered.</h1>
        <SearchBar />
    </header>
);

export default header;