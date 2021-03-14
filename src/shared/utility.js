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
