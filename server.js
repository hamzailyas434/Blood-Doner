const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("./app");

dotenv.config({ path: "./config.env" });
const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);
// mongoose.connect(DB).then(() => console.log(`DB COnnection Successfully`));
mongoose.connect(DB, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected to DB");
  }
});
// mongoose
//   .connect(DB, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useFindAndModify: false,
//   })
//   .then(() => console.log(`DB COnnection Successfully`));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
