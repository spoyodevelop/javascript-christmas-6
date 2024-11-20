export default class ShoppingItem {
  #name;

  #quantity;

  #price;

  #category;

  constructor(name, quantity, price, category) {
    this.#name = name;
    this.#quantity = quantity;
    this.#price = price;
    this.#category = category;
  }

  get name() {
    return this.#name;
  }

  get quantity() {
    return this.#quantity;
  }

  toString() {
    return `name : ${this.#name} quantity : ${this.#quantity} price: ${this.#price} category: ${this.#category}`;
  }
}
