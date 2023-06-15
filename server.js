const mongoose = require("mongoose");
const app = require("./app");
const port = process.env.PORT || 5000;
const colors = require("colors");
const dotenv = require("dotenv").config();

async function main() {
  await mongoose
    .connect(process.env.DATABASE_LOCAL)
    .then(() => console.log("Mongoose Database is connected."));
}

main().catch((err) => console.log(err));


app.listen(port, () => {
  console.log(`Server is running on port: ${port}`.red.bold);
});
