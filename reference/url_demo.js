const url = require("url");

const myURL = new URL("http://mywebsite.com/hello.html?id=100&status=active");

// Serialized URL
console.log(myURL.href);
