import React from 'react';
import SearchBar from '../UI/SearchBar/SearchBar';
import styles from './Header.module.scss';

const header = () => (
    <header className={`${styles.header} p-sm-5`}>
        <div className={styles.header__bg}></div>
        <div className={styles.container}>
            <h1 className="py-4">It's the food you love, delivered.</h1>
            <SearchBar />
        </div>
    </header>
);

export default header;