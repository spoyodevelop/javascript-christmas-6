export default class Product {
  #name;

  #category;

  #price;

  constructor(name, category, price) {
    this.#name = name;
    this.#category = category;
    this.#price = price;
  }

  get name() {
    return this.#name;
  }

  get category() {
    return this.#category;
  }

  get price() {
    return this.#price;
  }

  toString() {
    return `${this.#name} ${this.#category} ${this.#price}`;
  }
}
