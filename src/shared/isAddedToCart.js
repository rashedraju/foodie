const isAddedToCart = (foods, foodId) => foods.findIndex((food) => food.id === foodId) !== -1;

export default isAddedToCart;
