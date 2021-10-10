const express = require("express");
const morgan = require("morgan");
// Import DOner Route
const donerRoute = require("./routes/donerRoutes");
const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(express.json());

// Routues
app.use("/api/v1/doners", donerRoute);
module.exports = app;
