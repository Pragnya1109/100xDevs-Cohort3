/*
ASSIGNMENT #1 - Create an HTTP Server having 4 routes - 

1. http://localhost:3000/sum/1/2
2. http://localhost:3000/subtract/1/2
3. http://localhost:3000/multiply/1/2
4. http://localhost:3000/divide/1/2
*/

const express = require("express");
const app = express();

app.use(express.json());
const PORT = 3000;

// middleware
const check = (req, res, next) => {
  console.log(req.body);
  const { num } = req.params;
  // console.log(typeof(num))
  const parsedNum = parseInt(num);
  console.log(typeof parsedNum);
  console.log(parsedNum);

  //   take numbers from users
  const numbers = req.body.numbers;
  console.log(numbers);

  if (!Array.isArray(numbers) || numbers.length != parsedNum) {
    return res.status(400).send({
      error: `Please provide exactly ${parsedNum} numbers in Array format !!!`,
    });
  }

  if (!numbers.every((num) => typeof num === "number" && !isNaN(num))) {
    return res.status(400).send({ error: "All inputs must be valid numbers." });
  }
  req.parsedNum = parsedNum;
  req.numbers = numbers;

  next();
};

// 1. SUM
app.post("/sum/:num", check, (req, res) => {
  const { numbers } = req;
  const sum = numbers.reduce((sum, number) => (sum += number), 0);
  res.send({ numbers, sum });
});

// 2. SUBTRACTION
app.post("/subtract/:num", check, (req, res) => {
  const { numbers } = req;
  const sub = numbers.reduce((sub, number) => (sub -= number), 0);
  res.send({ numbers, sub });
});

// 3. MULTIPLICATION
app.post("/multiply/:num", check, (req, res) => {
  const { numbers } = req;
  const multiply = numbers.reduce(
    (multiply, number) => (multiply *= number),
    1
  );
  res.send({ numbers, multiply });
});

// 4. DIVIDE
app.post("/divide/:num", check, (req, res) => {
  const { numbers } = req;

  if (numbers.includes(0)) {
    return res.status(400).send({ error: "Division by zero is not allowed." });
  }
  const divide = numbers.reduce((divide, number) =>
    (divide /= number).toPrecision(4)
  );
  res.send({ numbers, divide });
});

app.listen(PORT, (req, res) => {
  console.log(`Server is listening on PORT ${PORT}`);
})