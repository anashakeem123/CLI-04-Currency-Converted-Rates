#! /usr/bin/env node
import inquirer from "inquirer"; // Importing the 'inquirer' package for user input
import chalk from "chalk"; // Importing the 'chalk' package for colored output
// Currency exchange rates
const Currency = {
    SAR: 1, // Base Currency Saudi Riyal(SAR)
    AUD: 0.405, // Australian Dollar(AUD)
    USD: 0.267, // United State(USD)
    JPY: 40.442, // Japanese(JPY)
    AFN: 18.999, // Afghan Afghani(AFN)
    BDT: 29.337, // bangladeshi Taka(BDT)
    CNY: 1.929, // Chinese Yuan(CNY)
    EUR: 0.246, //  Europe(EUR)
    PKR: 74.085, // Pakistani Rupee(PKR)
    INR: 22.213 // Indian Rupee(INR)
};
// Welcome message
let message = (chalk.bgGreen.blue.italic.underline('\n\t*WELCOME TO EXCHANGE CURRENCY RATES*\n'));
console.log(message);
// Function to prompt user for input
const user_answer = await inquirer.prompt([
    {
        name: 'from',
        message: (chalk.green.bgYellow.underline.bold('"Kindly Enter Your Currency" : ')), // Prompt for source currency
        type: 'list', // Using a list for selection
        choices: [
            'SAR',
            'AUD',
            'USD',
            'JPY',
            'AFN',
            'BDT',
            'CNY',
            'EUR',
            'PKR',
            'INR',
            'EXIT....'
        ], // Available currency choices
    },
    {
        name: 'to',
        message: (chalk.yellow.bgGreen('"Please Enter Your Currency" : ')), // Prompt for target currency
        type: 'list', // Using a list for selection
        choices: [
            'SAR',
            'AUD',
            'USD',
            'JPY',
            'AFN',
            'BDT',
            'CNY',
            'EUR',
            'PKR',
            'INR',
            'EXIT....'
        ], //  Available currency choices
    },
    {
        name: 'amount',
        message: (chalk.bgYellow.red.bold.underline('"Kindly Enter Your Amount" : ')), // / Prompt for amount to convert
        type: 'number', //  Accepting a numerical input
    },
]);
const FromCurrency = user_answer.from; // Source currency selected by the user
// Check if the user chose to exit
if (FromCurrency === 'Exit') {
    console.log(chalk.bgRed.black('\nExiting the program...')); // Print exit message
    process.exit(); // Exit the program
}
const fromCurrency = user_answer.from; // Source currency selected by the user
const toCurrency = user_answer.to; // Target currency selected by the user
const amount = user_answer.amount; // Amount to convert entered by the user
// Checking if the selected currencies are valid
if (!(fromCurrency in Currency) || !(toCurrency in Currency)) {
    console.log(chalk.bgRed.black('"Invalid currency input!!"')); // Print message for invalid input
}
else {
    const fromAmount = Currency[fromCurrency]; // Exchange rate for the source currency
    const toAmount = Currency[toCurrency]; // Exchange rate for the target currency
    const baseAmount = amount / fromAmount; // Convert the entered amount to the base currency
    const convertedAmount = baseAmount * toAmount; // Convert the amount to the target currency
    console.log(chalk.bgGreen.red.italic(`\n"Your Rates Value is" : ${convertedAmount}`)); // Print the converted amount
}
///////////////// *The End*////////////////////////
