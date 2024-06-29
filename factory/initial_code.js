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

function sendNotification(type, message) {
    let notification;
    if (type === 'email') {
        notification = new EmailNotification();
    } else if (type === 'sms') {
        notification = new SMSNotification();
    } else if (type === 'push') {
        notification = new PushNotification();
    } else {
        throw new Error('Unknown notification type');
    }
    notification.send(message);
}

sendNotification('email', 'This is an email notification.');
sendNotification('sms', 'This is an SMS notification.');
sendNotification('push', 'This is a push notification.');
