import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Aux from '../Auxiliary/Auxiliary';

const layout = (props) => (
    <Aux>
        <Header />
        <main {...props}> {props.children} </main>
        <Footer />
    </Aux>
);

export default layout;
