// Bad Example
class Database {
    save(data) {
      // Code to save data to database
    }
  }
  
  class App {
    constructor() {
      this.db = new Database();
    }
  
    saveData(data) {
      this.db.save(data);
    }
  }
  
  // Good Example
  class Database {
    save(data) {
      // Code to save data to database
    }
  }
  
  class App {
    constructor(db) {
      this.db = db;
    }
  
    saveData(data) {
      this.db.save(data);
    }
  }
  