import React from 'react';

import Aux from '../../hoc/Auxiliary/Auxiliary';
import Feature from './Feature/Feature';
import OurApp from './OurApp/OurApp';
import Partner from './Partner/Partner';
import SocialMedia from './SocialMedia/SocialMedia';

const home = () => {
    return (
        <Aux>
            <Feature/>
            <OurApp />
            <Partner />
            <SocialMedia />
        </Aux>
    );
}
export default home;