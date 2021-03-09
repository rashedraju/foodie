import React from 'react';
import styles from './Loader.module.scss';

const loader = () => (
    <div className={`${styles.ldrRing} my-1`}>
        <div />
        <div />
        <div />
        <div />
    </div>
);

export default loader;
