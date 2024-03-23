#! /usr/bin/env node
import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        type: "number",
        name: "NumberOne",
        message: "kindly enter your first no:"
    },
    {
        type: "number",
        name: "NumberTwo",
        message: "kindly enter your second no:"
    },
    {
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
        message: "Select one of the operators to perform action:"
    }
]);
const { NumberOne, NumberTwo, operator } = answers;
if (NumberOne && NumberTwo && operator) {
    let result = 0;
    if (operator === "Addition") {
        result = NumberOne + NumberTwo;
    }
    else if (operator === "Subtraction") {
        result = NumberOne - NumberTwo;
    }
    else if (operator === "Multiplication") {
        result = NumberOne * NumberTwo;
    }
    else if (operator === "Division") {
        result = NumberOne / NumberTwo;
    }
    console.log("your result is :", result);
}
else {
    console.log("kindly enter valid imput");
}
