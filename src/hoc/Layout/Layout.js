import React from 'react';

import Aux from '../Auxiliary/Auxiliary';
import Navigation from '../../components/Navigation/Navigation';
import Footer from '../../components/Footer/Footer';

const layout = props => (
    <Aux>
        <Navigation />
        <main {...props}> {props.children} </main>
        <Footer />
    </Aux>
);

export default layout;