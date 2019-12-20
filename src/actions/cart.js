import {CART} from './constants';

const onAddedToCart = (id) => {
    return {
    type: CART.addItem,
    payload: id
}};
const onDeletedFromCart = (id) => ({
    type: CART.deleteItem,
    payload: id
});
const increaseItemCount = (id) => ({
    type: CART.increaseCount,
    payload: id
});
const decreaseItemCount = (id) => ({
    type: CART.decreaseCount,
    payload: id
});

export {
    onAddedToCart,
    onDeletedFromCart,
    increaseItemCount,
    decreaseItemCount
};
