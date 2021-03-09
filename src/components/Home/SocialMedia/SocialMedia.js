import React from 'react';
import { ReactComponent as Fb } from '../../../assets/svg/fb.svg';
import { ReactComponent as Ig } from '../../../assets/svg/ig.svg';
import Logo from '../../UI/Logo/Logo';

const social = () => (
    <section className="bg-light my-5 border-top border-bottom">
        <div className="container">
            <div className="d-flex justify-content-between py-5">
                <div>
                    <Logo /> <span className="text-primary font-weight-bold">Foodie</span>
                </div>
                <div>
                    <a href="https://facebook.com" className="pr-3">
                        <Fb width="32" height="32" />
                    </a>
                    <a href="https://instagram.com">
                        <Ig width="32" height="32" />
                    </a>
                </div>
            </div>
        </div>
    </section>
);

export default social;
