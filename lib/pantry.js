export default class Pantry {
  constructor () {
    this.stock = {};
  }

  stockCheck(ingredientName) {
    return this.stock[ingredientName] || 0;
  }

  restock(ingredientName, quantity) {
    let currentQuantity = this.stock[ingredientName] || 0;
    return this.stock[ingredientName] = currentQuantity + quantity;
  }
}
