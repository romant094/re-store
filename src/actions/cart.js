import {CART} from './constants';

const onAddedToCart = (id) => {
    return {
        type: CART.addItem,
        payload: id
    }
};

const onDeleteFromCart = (id) => {
    return {
        type: CART.deleteItem,
        payload: id
    }
};

const onDecreaseItemCount = (id) => {
    return {
        type: CART.decreaseCount,
        payload: id
    }
};

export {
    onAddedToCart,
    onDeleteFromCart,
    onDecreaseItemCount
};
