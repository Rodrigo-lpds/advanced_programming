// Refactored using IIFE
(function() {
    function processData(data) {
        // Some data processing logic
        return data.toUpperCase();
    }

    // Usage
    let result = processData('hello');
    console.log(result); // Output: "HELLO"
})();
