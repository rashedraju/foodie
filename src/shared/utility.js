export const updateObject = (oldState, updatedProperties) => {
    return {
        ...oldState,
        ...updatedProperties
    }
}

export const updateFood = (foodsArr, foodId) => {
    const foods = [...foodsArr]
    const updatedFoods = foods.map(food => {
        if (food.id === foodId) {
            return {
                ...food,
                addedToCart: !food.addedToCart
            }
        }
        return food;
    })
    return updatedFoods;
}