import chalk from "chalk";


import { copyFoldeContent } from "./utils.js";





export const copyTemplate = async (appname, customname) => {
    // customname = !customname ? appname : customname; 
    try {
        copyFoldeContent(appname);
        console.log(chalk.bgBlueBright(`${appname} ${customname} created!`));
        
    } catch (error) {

        console.log(error);
        console.log(chalk.bgRedBright("couldn't copy teampalte folder"));

        
    }
};