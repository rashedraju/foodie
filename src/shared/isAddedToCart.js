const isAddedToCart = (foods, foodId) => {
    return foods.findIndex(food => food.id === foodId) !== -1 ? true : false;
}

export default isAddedToCart;