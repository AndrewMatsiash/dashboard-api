import express from "express";

const port = 8000;
const app = express();

app.get("/hello", (req, res) => {
  res.send("Hello, world!");
});

app.listen(port, () => {
  console.log(`server listen on ${port}!`);
});
