const express = require("express");
const app = express();
const routes = require("./routes/routes");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const expressValidator = require("express-validator");

dotenv.config();
mongoose
  .connect(process.env.MONGO_DB_URI)
  .then(() => console.log("DB connected"))
  .catch((err) => console.error(err));
mongoose.connection.on("error", (err) =>
  console.error(`DB connection error: ${err}`)
);
app.use(express.json());
app.use(expressValidator());
app.use("/", routes);

app.listen(process.env.PORT, () =>
  console.log(`Listening on port: ${process.env.PORT}`)
);