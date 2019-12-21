import {CART} from './constants';

const onAddedToCart = (id) => {
    return {
    type: CART.addItem,
    payload: id
}};
const onDeleteFromCart = (id) => ({
    type: CART.deleteItem,
    payload: id
});
const onIncreaseItemCount = (id) => ({
    type: CART.increaseCount,
    payload: id
});
const onDecreaseItemCount = (id) => ({
    type: CART.decreaseCount,
    payload: id
});

export {
    onAddedToCart,
    onDeleteFromCart,
    onIncreaseItemCount,
    onDecreaseItemCount
};
