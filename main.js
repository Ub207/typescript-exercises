"use strict";
// import {fullName} from "./module.js";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//  console.log(fullName());
// import fullName from "./module/namemodule.js";
const inquirer_1 = __importDefault(require("inquirer"));
const answers = await inquirer_1.default.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "please enter the paragraph to count the words"
    }
]);
const words = answers.Sentence.trim().split("");
console.log(words);
console.log(`the total words are ${words.length}`);
