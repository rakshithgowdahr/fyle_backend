const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
const getbranch = require("./route/getbranch");

const db = require("./config/keys").mongoURI;
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Mongodb connected"))
  .catch(err => console.log(err));

app.get("/", (req, res) => {
  res.send("hello world");
});

app.use("/api/branches", getbranch);

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server running on port ${port}`));
