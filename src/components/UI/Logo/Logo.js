import React from 'react';

import { ReactComponent as Icon } from '../../../assets/svg/logo.svg'
import './Logo.scss';

const logo = () => (
    <div className="bg-primary text-center d-inline-block logo">
        <Icon width="32px" height="32px" />
    </div>
);

export default logo;