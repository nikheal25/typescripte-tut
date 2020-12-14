// const express = require("express");
import express from "express";
const app = express();
const port = 3000;

app.get("/", (req) => {
  console.log("testing");
  let a = req.body;
  //   req.name = "dknkds";
  // This will cause an error
});

app.get("/flexible", (req: any) => {
  req.anything = "can do";
});
// app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
