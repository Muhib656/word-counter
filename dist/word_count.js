#!/usr/bin/env
import inquirer from "inquirer";
import chalk from "chalk";
async function main() {
    const userInput = await inquirer.prompt([
        {
            name: "paragraph",
            type: "input",
            message: chalk.yellow("Write your paragraph to count:")
        }
    ]);
    const words = userInput.paragraph.trim().split(" ");
    let wood = words.join("");
    console.log(wood.length);
}
main();
