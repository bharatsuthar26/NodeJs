const http = require("http");
const fs = require("fs");
const port = 5000;
const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.end("We are here on File Handling");
  } else if (req.url == "/create") {
    fs.writeFile(
      "crud.txt",
      "My text is being Displayed on the Text file",
      (err) => {
        if (err) {
          console.log("Error occured", +err);
        } else {
          console.log("Data created");
          return res.end();
        }
      }
    );
  } else if (req.url == "/read") {
    fs.readFile("./crud.txt", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(data.toString());
        return res.end();
      }
    });
  } else if (req.url == "/update") {
    fs.appendFile(
      "crud.txt",
      " This new text that has been Added to the file",
      (err, data) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Updated");
          return res.end();
        }
      }
    );
  } else if (req.url == "/delete") {
    fs.unlink("crud.txt", (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("File is deleted");
        return res.end();
      }
    });
  } else {
    res.end("Invalid Url Please check once again");
  }
});
server.listen(port, () => {
  console.log("server is working on "+port);
});