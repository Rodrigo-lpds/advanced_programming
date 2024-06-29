class NewStorageSystem {
    constructor() {
      this.dataStore = new Map();
    }
  
    insert(key, value) {
      this.dataStore.set(key, value);
      console.log(`Dados inseridos: ${key} -> ${value}`);
    }
  
    retrieve(key) {
      return this.dataStore.get(key);
    }
  }
  