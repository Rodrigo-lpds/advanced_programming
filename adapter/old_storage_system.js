class OldStorageSystem {
  constructor() {
    this.storage = {};
  }

  saveData(key, value) {
    this.storage[key] = value;
    console.log(`Dados salvos: ${key} -> ${value}`);
  }

  getData(key) {
    return this.storage[key];
  }
}

const oldStorage = new OldStorageSystem();
oldStorage.saveData("name", "Alice");
console.log(oldStorage.getData("name"));
