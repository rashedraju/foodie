import React from 'react';

import { ReactComponent as Icon } from '../../../assets/svg/logo.svg'
import styles from './Logo.module.scss';

const logo = () => (
    <div className={styles.logo}>
        <Icon width="24px" height="24px" />
    </div>
);

export default logo;