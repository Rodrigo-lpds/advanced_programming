import logger from './Logger';

function someFunction() {
    logger.log('Logging from someFunction');
}

function anotherFunction() {
    logger.log('Logging from anotherFunction');
}

someFunction();
anotherFunction();
