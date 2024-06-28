class EmailNotification {
    send(message) {
        console.log(`Sending email with message: ${message}`);
    }
}

class SMSNotification {
    send(message) {
        console.log(`Sending SMS with message: ${message}`);
    }
}

class PushNotification {
    send(message) {
        console.log(`Sending push notification with message: ${message}`);
    }
}


class NotificationFactory {
    createNotification(type) {
        switch(type) {
            case 'email':
                return new EmailNotification();
            case 'sms':
                return new SMSNotification();
            case 'push':
                return new PushNotification();
            default:
                throw new Error('Unknown notification type');
        }
    }
}

function sendNotification(type, message) {
    const factory = new NotificationFactory();
    const notification = factory.createNotification(type);
    notification.send(message);
}

// Usage
sendNotification('email', 'This is an email notification.');
sendNotification('sms', 'This is an SMS notification.');
sendNotification('push', 'This is a push notification.');
