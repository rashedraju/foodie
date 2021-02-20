import React from 'react';
import SearchBar from '../UI/SearchBar/SearchBar';
import styles from './Header.module.scss';

const header = () => (
    <header className={`${styles.header} p-sm-5`}>
        <div className="container">
            <h1 className="py-4 text-white text-center display-md">It's the food you love, delivered.</h1>
            <SearchBar />
        </div>
    </header>
);

export default header;