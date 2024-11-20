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

  get price() {
    return this.#price;
  }

  get quantity() {
    return this.#quantity;
  }

  get category() {
    return this.#category;
  }

  toString() {
    return `${this.#name} ${this.#quantity}개`;
  }

  toStringDetail() {
    return `${this.#name} ${this.#category} ${this.#price} ${this.#quantity}`;
  }
}
