import React from 'react';

import { ReactComponent as CartIcon } from '../../assets/svg/cart-outline.svg';
import { ReactComponent as DeliveryIcon } from '../../assets/svg/bicycle-outline.svg';
import Button from '../../components/UI/Button/Button';
import CartItem from './CartItem/CartItem';

const cart = () => {
    const cartItems = [
        {
            id: 12,
            title: 'Lorem ipsum',
            alt: 'recipe image',
            addToCart: false,
            price: 9,
            oldPrice: 12,
            itemCount: 1
        },
        {
            id: 12,
            title: 'Lorem ipsum',
            alt: 'recipe image',
            addToCart: false,
            price: 11,
            oldPrice: 19,
            itemCount: 1
        }
    ];

    // const controlCartHandle = () => {
    //     ///// TO DO /////
    //     // ADD RECIPE TO CART
    //     // REMOVE RECIPE FROM CART
    // }

    return (
        <div className="card">
            <div className="card-header d-flex justify-content-between">
                <div>
                    <CartIcon /> <span className="text-primary">{cartItems.length} ITEM</span>
                </div>
                <Button cls="btn border border-secondary text-secondary p-1"
                    title="Close" />
            </div>
            <div className="bg-primary text-white px-3 py-2">Shop $30 more and get 20% cashback</div>
            <div className="card-body">
                <div className="bg-light px-3 py-2"> <DeliveryIcon width="32" height="32" /> <span>Regular Delivery</span></div>
                <CartItem
                    items={cartItems} />

                <div className="card-footer d-flex justify-content-between">
                    <Button cls="btn btn-success mr-4 text-white p-1"
                        title="Add More" />
                    <Button cls="btn btn-primary mr-4 text-white p-1"
                        title="Checkout" />
                </div>
            </div>

        </div>
    );
}

export default cart;