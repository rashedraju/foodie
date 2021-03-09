import React from 'react';
import SearchBar from '../UI/SearchBar/SearchBar';
import styles from './Hero.module.scss';

const hero = () => (
    <section className={`${styles.hero} p-sm-5 py-5`}>
        <div className={styles.hero__bg} />
        <h1 className={`${styles.hero__text} my-5`}>It&apos;s the food you love, delivered.</h1>
        <SearchBar />
    </section>
);

export default hero;
