class Inventory {
  constructor(product) {
    this.product = product;
    this.quantity = 0;
    this.observers = [];
  }

  setQuantity(quantity) {
    this.quantity = quantity;
    this.notifyAllObservers();
  }

  attach(observer) {
    this.observers.push(observer);
  }

  notifyAllObservers() {
    this.observers.forEach((observer) =>
      observer.update(this.product, this.quantity)
    );
  }
}

class UIObserver {
  update(product, quantity) {
    console.log(`UI updated. ${product} quantity is now ${quantity}.`);
  }
}

class OrderObserver {
  update(product, quantity) {
    console.log(`Checking orders for ${product}. Quantity is now ${quantity}.`);
  }
}

class ReportObserver {
  update(product, quantity) {
    console.log(`Reports updated. ${product} quantity is now ${quantity}.`);
  }
}

const inventory = new Inventory("Product A");

const uiObserver = new UIObserver();
const orderObserver = new OrderObserver();
const reportObserver = new ReportObserver();

inventory.attach(uiObserver);
inventory.attach(orderObserver);
inventory.attach(reportObserver);

inventory.setQuantity(10);
inventory.setQuantity(20);
