class Request {
  constructor(type, message) {
    this.type = type;
    this.message = message;
  }
}

class Handler {
  setNext(handler) {
    this.nextHandler = handler;
    return handler;
  }

  handle(request) {
    if (this.nextHandler) {
      return this.nextHandler.handle(request);
    }
    return null;
  }
}

class AdminHandler extends Handler {
  handle(request) {
    if (request.type === "Admin") {
      console.log(`Admin handler: ${request.message}`);
    } else {
      super.handle(request);
    }
  }
}

class ManagerHandler extends Handler {
  handle(request) {
    if (request.type === "Manager") {
      console.log(`Manager handler: ${request.message}`);
    } else {
      super.handle(request);
    }
  }
}

class UserHandler extends Handler {
  handle(request) {
    if (request.type === "User") {
      console.log(`User handler: ${request.message}`);
    } else {
      super.handle(request);
    }
  }
}

class GuestHandler extends Handler {
  handle(request) {
    if (request.type === "Guest") {
      console.log(`Guest handler: ${request.message}`);
    } else {
      console.log(`Unknown handler: ${request.message}`);
    }
  }
}

// Configuração da cadeia de responsabilidade
const adminHandler = new AdminHandler();
const managerHandler = new ManagerHandler();
const userHandler = new UserHandler();
const guestHandler = new GuestHandler();

adminHandler.setNext(managerHandler).setNext(userHandler).setNext(guestHandler);

// Uso
const request1 = new Request("Admin", "Admin request");
const request2 = new Request("Manager", "Manager request");
const request3 = new Request("User", "User request");
const request4 = new Request("Guest", "Guest request");

adminHandler.handle(request1);
adminHandler.handle(request2);
adminHandler.handle(request3);
adminHandler.handle(request4);
