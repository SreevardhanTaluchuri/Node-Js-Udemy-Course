const fs = require("fs");
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write(`
        <html>
            <body>
                <h1>Welcome to My Sample Server</h1>
                <form action="/create-user" method="POST">
                    <input type="text" name="User">
                    <button type="submit">Submit</button>
                </form>
            </body>
        </html>
      `);

    return res.end();
  }

  if (req.url === "/users") {
    res.write(`
        <html><body>
            <h1>Welcome to Dummy Users</h1>
            <ul>
                <li>User1</li>
                <li>User2</li>
                <li>User3</li>
            </ul>
        </body></html>
      `);

    return res.end();
  }

  if (req.url === "/create-user" && req.method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });

    req.on("end", () => {
      const parsedData = Buffer.concat(body).toString();
      const message = parsedData.split("=")[1];
      console.log(message);
      fs.writeFileSync("message.txt", message);
    });
  }
});

server.listen(3000, () => {
  console.log("Server is UP and Running");
});
