class StorageAdapter {
  constructor(newStorageSystem) {
    this.newStorageSystem = newStorageSystem;
  }

  saveData(key, value) {
    this.newStorageSystem.insert(key, value);
  }

  getData(key) {
    return this.newStorageSystem.retrieve(key);
  }
}

const newStorageSystem = new NewStorageSystem();
const adaptedStorage = new StorageAdapter(newStorageSystem);
adaptedStorage.saveData("name", "Alice");
console.log(adaptedStorage.getData("name"));
