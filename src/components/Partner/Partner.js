import React from 'react';
import { Button } from 'react-bootstrap';
import rightArrow from '../../assets/svg/arrow-forward.svg';
import checkmarkIcon from '../../assets/svg/checkmark-done.svg';

const partner = () => {
    const item = [
        {
            id: 0,
            title: 'Get your food feature',
        },
        {
            id: 1,
            title: 'Enjoy an exposure to a huge customer',
        },
        { id: 2, title: 'increase your sales through collaborative compaigns' },
    ].map((el) => (
        <p className="pl-3" key={el.id}>
            <img src={checkmarkIcon} alt="Checkmark Icon" /> {el.title}{' '}
        </p>
    ));

    return (
        <section className="bg-light py-4">
            <div className="container">
                <div className="row border-0 shadow">
                    <div className="col-md-9 px-5 py-3">
                        <h2>Got a Restaurant? Become a Partner</h2>
                        {item}
                    </div>
                    <div className="col-md-3 align-self-center text-center mb-2">
                        <Button className="btn btn-primary text-white text-center w-on-sm-100">
                            Get Started <img src={rightArrow} alt="right Icon" />
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default partner;
