class Logger {
    constructor() {
        if (!Logger.instance) {
            Logger.instance = this;
        }
        return Logger.instance;
    }

    log(message) {
        console.log(`Log: ${message}`);
    }
}

// Freeze the instance to prevent modifications
const instance = new Logger();
Object.freeze(instance);

export default instance;
