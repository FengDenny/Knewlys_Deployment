const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = require("./app");

dotenv.config({ path: "./config/config.env" });

const DB = `mongodb+srv://DFeng:${process.env.DATABASE_PASSWORD}@knewlys.ztfqz.mongodb.net/knewlys`;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`Connected to MongoDB successfully`);
  });

//  port declarations
const port = process.env.PORT || 3005;
app.listen(port, () => {
  console.log(
    `App is running on port: ${port} in ${process.env.NODE_ENV} mode `
  );
});
