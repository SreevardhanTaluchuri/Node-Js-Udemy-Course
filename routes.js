const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;
  if (url === "/") {
    res.write(`
      <html>
        <head>First Server</head>
        <body>
            <h1>Enter Messege</h1>
            <form action="/message"  method="POST">
                <input type="text" name="Messege">
                <button type="submit">Submit</button>
            </form>
        </body>
      </html>
      `);
    return res.end();
  }
  if (url === "/message" && req.method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
      console.log(chunk);
    });
    req.on("end", () => {
      const parsedMessage = Buffer.concat(body).toString();
      const messege = parsedMessage.split("=")[1];
      fs.writeFileSync("message.txt", messege);
    });
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }
  res.write(`
      <html>
        <head>First Server</head>
        <body>
            <h1>Welcome to my first server</h1>
        </body>
      </html>
      `);
};

module.exports = {
  handler: requestHandler,
  text: "Some Harded Text",
};
