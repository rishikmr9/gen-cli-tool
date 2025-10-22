#!/usr/bin/env node
import { Command } from "commander";
const program = new Command();
import { copyTemplate } from "../src/app.js";

import Config from "../src/config.js";





program.name("gen").
description("generate project setup and code template");


program.command("setup")
.description("setup a project template")

.argument("<app-name>", "name of the template project folder")
.option("--type <string>", "describe the type of app")
.option("--name <string>", "name of the project")
.action((appname, options) => {
    
    copyTemplate(appname, options.name);
    
});

program.command("set")
.option("--templateFolder <string>", "set the path to the folder which contains your templates")
.action((options) => {

    if(Object.hasOwn(options, "templateFolder")){
        Config.setTemplateFolder(options.templateFolder);
    }

});




program.parse();