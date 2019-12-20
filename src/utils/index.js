export const compose = (...functions) => (component) => functions.reduceRight((wrapped, f) => f(wrapped), component);
export const updateCartItem = (book, item = {}) => {
    const {
        id = book.id,
        count = 0,
        title = book.title,
        total = 0
    } = item;

    return {
        id,
        title,
        count: count + 1,
        total: total + book.price
    }
};

export const updateCart = (cartItems, item, idx) => {
    if (idx === -1) {
        return [...cartItems, item]
    }

    return [
        ...cartItems.slice(0, idx),
        item,
        ...cartItems.slice(idx + 1)
    ]
};

export const countCartTotal = (array, key) => array.reduce((acc, item) => item[key] + acc, 0);
