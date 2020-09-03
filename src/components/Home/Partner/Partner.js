import React from 'react';
import checkmarkIcon from '../../../assets/svg/checkmark-done.svg';
import rightArrow from '../../../assets/svg/arrow-forward.svg';
import Button from '../../UI/Button/Button';

const partner = () => {
    let item = ['Get your food feature', 'Enjoy an exposure to a huge customer', 'increase your sales through collaborative compaigns'].map((el, i) => (<p className="pl-3" key={i}><img src={checkmarkIcon} alt="Checkmark Icon"></img> {el} </p>));

    return (
        <section className="bg-light py-4">
            <div className="container">
                <div className="row border-0 shadow">
                    <div className="col-md-9 px-5 py-3">
                        <h2>Got a Restaurant? Become a Partner</h2>
                        {item}
                    </div>
                    <div className="col-md-3 align-self-center text-center mb-2">
                        <Button
                            rightIcon={rightArrow}
                            cls="btn btn-primary text-white text-center w-on-sm-100"
                            title="Get Started" />
                    </div>
                </div>
            </div>
        </section>
    );
}
export default partner;