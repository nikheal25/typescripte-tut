// const express = require("express");
import express from "express";
import { uuid } from "uuidv4";
const app = express();
const port = 3000;

interface Student {
  id: string;
  score: number;
}

// let s = Student( id:uuid()
//   score: 100);

const printStudentDetails = (student: Student) => {
  console.table(student);
  console.log(student.id);
};

let tempStudent = { id: uuid(), score: 100, ab: "jdkjfn" };
printStudentDetails(tempStudent);

const add = (a: number, b: number): string => {
  if (a > b) {
    return "bigger";
  } else {
    return "smaller";
  }
};

app.get("/", (req) => {
  console.log("testing");
  let a = req.body;
  //   req.name = "dknkds";
  // This will cause an error
});

app.get("/flexible", (req: any) => {
  req.anything = "can do";
});

let num: string;
console.log("generating random num");
num = uuid();
console.log(num);

// app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
