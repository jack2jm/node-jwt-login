const Pool = require("pg").Pool;

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "Jack@1245",
  port: 5432,
  database: "authtodo",
});

pool.on("connect", (client) => {
  client.on("notice", (msg) => console.warn("notice:", msg));
  client.on("end", () => console.log("client has disconnected"));
});

pool.on("error", (err, client) => {
  console.error("Error:", err);
});

module.exports = pool;
