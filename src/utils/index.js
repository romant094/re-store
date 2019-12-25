export const compose = (...functions) => (component) => functions.reduceRight((wrapped, f) => f(wrapped), component);
export const updateCartItem = (book, item = {}, quantity) => {
    const {
        id = book.id,
        count = 0,
        title = book.title,
        total = 0
    } = item;

    return {
        id,
        title,
        count: count + quantity,
        total: total + quantity * book.price
    }
};

export const updateCart = (cartItems, item, idx) => {
    if (item.count === 0){
        return [
            ...cartItems.slice(0, idx),
            ...cartItems.slice(idx + 1)
        ]
    }

    if (idx === -1) {
        return [...cartItems, item]
    }

    return [
        ...cartItems.slice(0, idx),
        item,
        ...cartItems.slice(idx + 1)
    ]
};

export const updateOrder = (state, bookId, quantity) => {
    const {books, cartItems} = state;

    const itemIndex = cartItems.findIndex(({id}) => id === bookId);
    const book = books.find(({id}) => id === bookId);

    const newItem = updateCartItem(book, cartItems[itemIndex], quantity);

    return {
        ...state,
        cartItems: updateCart(cartItems, newItem, itemIndex)
    };
}
