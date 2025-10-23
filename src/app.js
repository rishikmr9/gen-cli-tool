import { Command } from "commander";

import Config from "./config.js";
import { Setup } from "./setup.js";
import chalk from "chalk";





export class App{
    constructor(){

        const program = new Command();

        program.name("gen").
        description("generate project setup and code template");


        program.command("setup")
        .description("setup a project template")

        .argument("<app-name>", "name of the template project folder")
        .option("--type <string>", "describe the type of app")
        .action((appname) => {

            Setup.copyTemplate(appname);

        });





        program.command("set")
        .option("--templateFolder <string>", "set the path to the folder which contains your templates")
        .action((options) => {
        
            if(Object.hasOwn(options, "templateFolder")){

                Config.setTemplateFolder(options.templateFolder);

                console.log(chalk.bgGreen("template folder set to: " + options.templateFolder));

            }
        
        });



        program.parse();

    }
}