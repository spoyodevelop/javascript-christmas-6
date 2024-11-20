import InputView from './InputView.js';
import Product from './Product.js';

class App {
  async run() {
    const Products = [
      // 애피타이저
      { name: '양송이수프', price: 6000, category: '애피타이저' },
      { name: '타파스', price: 5500, category: '애피타이저' },
      { name: '시저샐러드', price: 8000, category: '애피타이저' },

      // 메인
      { name: '티본스테이크', price: 55000, category: '메인' },
      { name: '바비큐립', price: 54000, category: '메인' },
      { name: '해산물파스타', price: 35000, category: '메인' },
      { name: '크리스마스파스타', price: 25000, category: '메인' },

      // 디저트
      { name: '초코케이크', price: 15000, category: '디저트' },
      { name: '아이스크림', price: 5000, category: '디저트' },

      // 음료
      { name: '제로콜라', price: 3000, category: '음료' },
      { name: '레드와인', price: 60000, category: '음료' },
      { name: '샴페인', price: 25000, category: '음료' },
    ];

    const parsedProducts = Products.map(
      ({ name, price, category }) => new Product(name, price, category),
    );
    const parsedDateNumber = await InputView.getValidDate();
    // const parsedShoppingItem =
    //   await InputView.getValidShoppingCart(parsedProducts);
    const specialDates = [3, 10, 17, 24, 25, 31];

    const weekend = [2, 3, 9, 10, 16, 17, 23, 24, 30, 31];

    const isWeekend = weekend.some((day) => day === parsedDateNumber);
    const isSpecialDate = specialDates.some((day) => day === parsedDateNumber);
    const DDayPromotionAvailable = parsedDateNumber <= 25;
    // console.log(
    //   `주말? => ${isWeekend} 별찍은 날? => ${isSpecialDate} 디데이할인 적용?=? ${DDayPromotionAvailable}`,
    // );
    parsedShoppingItem.forEach((item) => console.log(item.toString()));
    let DDayPromotionSaleTotal = 0;
    if (DDayPromotionAvailable) {
      DDayPromotionSaleTotal += 1000;
      const addedDay = parsedDateNumber - 1;
      DDayPromotionSaleTotal += addedDay * 100;
    }
    if (!isWeekend) {
    }
  }
}

export default App;
