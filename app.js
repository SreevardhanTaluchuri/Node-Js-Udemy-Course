const http = require("http");

const server = http.createServer((req, res) => {
  console.log("Server is created");

  if (req.url === "/") {
    res.write(`
      <html>
        <head><title>My First server</title></head>
        <body>
            <h1>Welcome to My First Server</h1>
            <form action="/create-user" method="POST">
                <input type="text" name="username">
                <button type="submit">Submit</button>
            </form>
        </body>
      </html>
      `);

    return res.end();
  }

  if (req.url === "/users") {
    res.write(`
      <html>
        <head><title>My First server</title></head>
        <body>
            <h1>Users</h1>
            <ul>
                <li>User1</li>
                <li>User2</li>
                <li>User3</li>
            </ul>
        </body>
      </html>
      `);
  }

  if (req.url === "/create-user" && req.method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });

    req.on("end", () => {
      const parsedMessage = Buffer.concat(body).toString();
      const message = parsedMessage.split("=")[1];
      console.log(message);

      res.statusCode = 302;
      res.setHeader("Location", "/");
    });
  }
});

server.listen(3000, (req, res) => {
  console.log("Server is Up and Listening");
});
