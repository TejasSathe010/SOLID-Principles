// Previous

class CartManager {
  constructor(user, database) {
    this.user = user;
    this.database = database;
    this.cart = [];
  }

  addToCart(product) {
    if (this.user.isLoggedIn()) {
      this.cart.push(product);
      this.database.saveCart(this.user.getId(), this.cart);
    } else {
      console.log("User must be logged in to add items to the cart.");
    }
  }

  removeFromCart(product) {
    const index = this.cart.indexOf(product);
    if (index !== -1) {
      this.cart.splice(index, 1);
      this.database.saveCart(this.user.getId(), this.cart);
    }
  }

  checkout() {
    // Checkout logic
  }
}


// Updated


class Cart {
  constructor() {
    this.items = [];
  }

  addItem(product) {
    this.items.push(product);
  }

  removeItem(product) {
    const index = this.items.indexOf(product);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }
}

class CartPersistence {
  constructor(database) {
    this.database = database;
  }

  saveCart(userId, cartItems) {
    // Save cart to the database
  }
}

class AuthService {
  isLoggedIn(user) {
    // Check if the user is logged in
  }

  getUserId(user) {
    // Get user ID
  }
}

class CartManager {
  constructor(cart, cartPersistence, authService) {
    this.cart = cart;
    this.cartPersistence = cartPersistence;
    this.authService = authService;
  }

  addToCart(product, user) {
    if (this.authService.isLoggedIn(user)) {
      this.cart.addItem(product);
      const userId = this.authService.getUserId(user);
      this.cartPersistence.saveCart(userId, this.cart.items);
    } else {
      console.log("User must be logged in to add items to the cart.");
    }
  }

  removeFromCart(product) {
    this.cart.removeItem(product);
    // No need to persist cart here
  }

  checkout() {
    // Checkout logic
  }
}
