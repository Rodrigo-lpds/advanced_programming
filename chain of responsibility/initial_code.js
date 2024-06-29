class Request {
  constructor(type, message) {
    this.type = type;
    this.message = message;
  }
}

class Handler {
  process(request) {
    if (request.type === "Admin") {
      console.log(`Admin handler: ${request.message}`);
    } else if (request.type === "Manager") {
      console.log(`Manager handler: ${request.message}`);
    } else if (request.type === "User") {
      console.log(`User handler: ${request.message}`);
    } else {
      console.log(`Unknown handler: ${request.message}`);
    }
  }
}

const handler = new Handler();
handler.process(new Request("Admin", "Admin request"));
handler.process(new Request("Manager", "Manager request"));
handler.process(new Request("User", "User request"));
handler.process(new Request("Guest", "Guest request"));
