#! /usr/bin/env node 
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// creating a CLI based Number Guessing game 
const inquirer_1 = __importDefault(require("inquirer"));
const chalk_1 = __importDefault(require("chalk"));
let randomNumber = Math.floor(Math.random() * 6 + 1);
console.log(randomNumber); //used for observation of flow(Testing Purpose For Conditions MAtch Or Not)
const answers = await inquirer_1.default.prompt([{
        name: "GuessingNumber",
        type: "number",
        message: chalk_1.default.blueBright.bgYellow("Think of any Number and then Enter!")
    }]);
if (answers.GuessingNumber === randomNumber) {
    console.log(chalk_1.default.greenBright("Congratulations,You Won The Match"));
}
else {
    console.log(chalk_1.default.redBright("Ooops!!! You Loss The Game, Try Again"));
}
