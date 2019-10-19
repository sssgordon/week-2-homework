class ShoppingCart {
    constructor() {
        this.cart = []
    }

    getItems() {
        return this.cart
    }

    addItem(itemName, quantity, price) {
        this.cart.push(
            {
                name: itemName,
                quantity: quantity,
                pricePerUnit: price
            }
        )
    }

    clear() {
        this.cart = []
    }

    total() {
        return this.cart
            .map(item => item.quantity * item.pricePerUnit)
            .reduce((itemTotal, currentItem) => itemTotal + currentItem, 0)
    }
}

const cart = new ShoppingCart
// cart.addItem('Lufsig', 2, 7.99)
// cart.addItem('Winnie_The_Pooh', 1, 3)
// console.log(cart.getItems())
// console.log(cart.clear())
// console.log(cart.total())

module.exports = ShoppingCart