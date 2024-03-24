// User class responsible only for user data management
class User {
    constructor(name, email) {
      this.name = name;
      this.email = email;
    }
  
    save() {
      // Save user data to the database
      console.log(`Saving user ${this.name}`);
    }
}
  
  // NotificationService class responsible for sending notifications
class NotificationService {
    sendNotification(user, message) {
      // Send notification to the user
      console.log(`Sending notification to ${user.name}: ${message}`);
    }
}

const newUser = new User("Tejas", "tejassathe117@gmail.com");
newUser.save();

const notification = new NotificationService();
notification.sendNotification(newUser, "Hello Tejas");


  