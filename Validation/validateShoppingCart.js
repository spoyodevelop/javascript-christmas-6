import { ERROR_MESSAGES } from '../config/defaultSettings.js';
import { isNumber } from '../Utility/regex.js';
import OutputView from '../src/OutputView.js';
import ShoppingItem from '../src/ShoppingItem.js';

function isValidFormat(item) {
  const [name, quantity] = item.split('-');
  return name && !Number.isNaN(quantity);
}

function parseItem(item) {
  const [name, quantity] = item.split('-');
  return { name, quantity: Number(quantity) };
}

function isValidQuantity(quantity) {
  return isNumber.test(quantity) && Number(quantity) > 0;
}

function isValidProduct(name, products) {
  return products.some((product) => product.name === name);
}

export default function validateShoppingCart(inputString, products) {
  const items = inputString.includes(',')
    ? inputString.split(',').map((item) => item.trim())
    : [inputString.trim()];

  const shoppingItems = [];

  for (const item of items) {
    if (!isValidFormat(item)) {
      OutputView.printMessage(
        `[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.`,
      );
      return null;
    }

    const { name, quantity } = parseItem(item);

    if (!isValidQuantity(quantity)) {
      OutputView.printMessage(
        `[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.`,
      );
      return null;
    }

    if (!isValidProduct(name, products)) {
      OutputView.printMessage(`${ERROR_MESSAGES.ITEM_NOT_FOUND}`);
      return null;
    }
    const matchedProduct = products.find((item) => item.name == name);
    const { name: itemName, price, category } = matchedProduct;

    shoppingItems.push(new ShoppingItem(itemName, quantity, price, category));
  }

  const uniqueNames = new Set(shoppingItems.map((item) => item.name));
  if (uniqueNames.size !== shoppingItems.length) {
    OutputView.printMessage(
      '[ERROR] 중복된 주문을 입력했습니다. 다시 입력해 주시겠어요?',
    );
    return null;
  }
  const allProductSize = shoppingItems.reduce(
    (acc, { quantity }) => acc + quantity,
    0,
  );
  if (allProductSize > 20) {
    OutputView.printMessage('[ERROR] 20개 이상의 주문을 받을수 없습니다.');
    return null;
  }
  const isAllProductDrink = shoppingItems.every(
    (item) => item.category === '음료',
  );
  if (isAllProductDrink) {
    OutputView.printMessage('[ERROR] 음료만 주문으로 받을수는 없습니다.');
    return null;
  }

  return shoppingItems.length > 0 ? shoppingItems : null;
}
