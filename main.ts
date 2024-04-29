// import {fullName} from "./module.js";

//  console.log(fullName());
// import fullName from "./module/namemodule.js";
import inquirer from "inquirer"

const answers = await inquirer.prompt([
    {
        name : "Sentence",
    type : "input",
    message :"please enter the paragraph to count the words"
    }
])
 const words =answers.Sentence.trim().split("")

 console.log(words);
 console.log(`the total words are ${words.length}`);
   




