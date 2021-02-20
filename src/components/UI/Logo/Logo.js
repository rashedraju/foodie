import React from 'react';

import { ReactComponent as Icon } from '../../../assets/svg/logo.svg'
import styles from './Logo.module.scss';

const logo = () => (
    <div className={`${styles.logo} bg-primary text-center d-inline-block`}>
        <Icon width="32px" height="32px" />
    </div>
);

export default logo;