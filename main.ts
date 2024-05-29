#! /usr/bin/env node 
// creating a CLI based Number Guessing game 
import inquirer from "inquirer";
import chalk from "chalk"
let randomNumber=Math.floor(Math.random()*6+1)
console.log(randomNumber); //used for observation of flow(Testing Purpose For Conditions MAtch Or Not)

const answers=await inquirer.prompt([{

    name :"GuessingNumber",
    type : "number",
    message :chalk.blueBright.bgYellow("Think of any Number and then Enter!")
}])

if (answers.GuessingNumber===randomNumber) {
    console.log(chalk.greenBright("Congratulations,You Won The Match"));
    } else {
    console.log(chalk.redBright("Ooops!!! You Loss The Game, Try Again"));
} 