class Inventory {
  constructor(product) {
    this.product = product;
    this.quantity = 0;
  }

  setQuantity(quantity) {
    this.quantity = quantity;
    this.updateUI();
    this.checkOrders();
    this.updateReports();
  }

  updateUI() {
    console.log(
      `UI updated. ${this.product} quantity is now ${this.quantity}.`
    );
  }

  checkOrders() {
    console.log(
      `Checking orders for ${this.product}. Quantity is now ${this.quantity}.`
    );
  }

  updateReports() {
    console.log(
      `Reports updated. ${this.product} quantity is now ${this.quantity}.`
    );
  }
}

// Uso
const inventory = new Inventory("Product A");
inventory.setQuantity(10);
inventory.setQuantity(20);
