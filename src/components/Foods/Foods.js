import React from 'react';
import Food from './Food/Food';

const Foods = (props) => {
    const { foods } = props;
    const foodElelments = foods.map((item) => <Food item={item} key={item.id} />);
    return (
        <section className="container">
            <div className="row">{foodElelments}</div>
        </section>
    );
};

export default Foods;
