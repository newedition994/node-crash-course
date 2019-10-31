const url = require("url");

const myURL = new URL("http://mywebsite.com/hello.html?id=100&status=active");

// Serialized URL
console.log(myURL.href);
console.log(myURL.toString());

// Host => root domain
console.log(myURL.host);

// Host name => does not get PORT
console.log(myURL.hostname);

// Pathname
console.log(myURL.pathname);

// Serialized query
console.log(myURL.search);

// Params
console.log(myURL.searchParams);

// Add Params
myURL.searchParams.append("abc", "123");
console.log(myURL.searchParams);

// Looping params
myURL.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));
