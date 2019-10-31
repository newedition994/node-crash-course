const fs = require("fs");

const path = require("path");

// create a folder
// fs.mkdir(path.join(__dirname, "/test"), {}, err => {
//   if (err) throw err;
//   console.log("Folder created...");
// });

// create and write a file
// fs.writeFile(
//   path.join(__dirname, "/test", "hello.txt"),
//   "Hello World!",
//   err => {
//     if (err) throw err;
//     console.log("File written to...");

//     // File append
//     fs.appendFile(
//       path.join(__dirname, "/test", "hello.txt"),
//       " I love Node.js",
//       err => {
//         if (err) throw err;
//         console.log("File written to...");
//       }
//     );
//   }
// );

// Read a file
fs.readFile(path.join(__dirname, "/test", "hello.txt"), "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
