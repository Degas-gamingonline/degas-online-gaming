const express = require("express");
const http = require("http");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db");

const app = express();
const server = http.createServer(app);

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/auth", require("./routes/auth"));
app.use("/api/match", require("./routes/match"));
app.use("/api/wallet", require("./routes/wallet"));
app.use("/api/admin", require("./routes/admin"));

require("./socket")(server);

server.listen(process.env.PORT || 5000, () =>
  console.log("🔥 DEGAS backend running")
);