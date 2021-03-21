export const updateObject = (oldState, updatedProperties) => ({
    ...oldState,
    ...updatedProperties,
});

export const updateFood = (foodsArr, foodId) => {
    const updatedFoods = foodsArr.map((food) => {
        if (food.id === foodId) {
            return {
                ...food,
                isAddedToCart: !food.isAddedToCart,
            };
        }
        return food;
    });
    return updatedFoods;
};

export const updatePrice = (price, itemPrice, count, identifier) => {
    if (identifier === 'add') {
        return {
            ...price,
            subTotal: price.subTotal + itemPrice,
            total: price.vat + price.deliveryFee + price.subTotal + itemPrice,
        };
    }
    if (identifier === 'sub') {
        return {
            ...price,
            subTotal: price.subTotal - itemPrice * count,
            total: price.total - itemPrice * count,
        };
    }
    return {
        ...price,
    };
};

export const isAddedToCart = (cartItems, foodId) =>
    cartItems.findIndex((item) => item.id === foodId) !== -1;
