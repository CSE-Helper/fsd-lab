<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="src/style.css">
  </head>
  <body>
    <h1 id="header"></h1>

    <script src="src/script.js"></script>
  </body>
</html>

//script.js
const fs = require('fs');

let data = "This is a file containing a collection of books.";

fs.writeFile("example.txt", data, (err) => {
if (err)
    console.log(err);
else {
    console.log("File written successfully\n");
    console.log("The written has the following contents:");
    console.log(fs.readFileSync("example.txt", "utf8"));
}
});
