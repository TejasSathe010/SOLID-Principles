class Book {
  constructor(title, price) {
    this.title = title;
    this.price = price;
  }
}

class Order {
  constructor(books, priceCalculator) {
    this.books = books;
    this.priceCalculator = priceCalculator;
  }

  calculateTotalPrice() {
    return this.priceCalculator.calculateTotalPrice(this.books);
  }
}

class PriceCalculator {
  calculateTotalPrice(books) {
    let totalPrice = 0;
    books.forEach(book => {
      totalPrice += book.price;
    });
    return totalPrice;
  }
}

class DiscountPriceCalculator extends PriceCalculator {
  constructor(discountPercentage) {
    super();
    this.discountPercentage = discountPercentage;
  }

  calculateTotalPrice(books) {
    let totalPrice = super.calculateTotalPrice(books);
    return totalPrice * (1 - this.discountPercentage / 100);
  }
}

const books = [
  new Book("The Hobbit", 10),
  new Book("To Kill a Mockingbird", 12),
  new Book("Harry Potter", 15)
];

const order = new Order(books, new DiscountPriceCalculator(10));
console.log(order.calculateTotalPrice()); // Output: 33.3
