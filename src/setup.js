import fs from "fs";
import path from "path";

import chalk from "chalk";

import Config from "./config.js";

import { Messages } from "./constants/Messages.js";





export class Setup{
    
    static copyFolderContent(folderPath){

        const items = fs.readdirSync(folderPath);

        for (const item of items) {

            // get the path to each item in template folder
            const src = path.join(folderPath, item);
            const des = path.join(process.cwd(), item);

            // copy each item
            fs.cpSync(src, des, {recursive: true});

        }    
        
    }





    static copyTemplate(appname) {
        try {

            const templateFolderPath = Config.getTemplateFolder() + "/" + appname;
            if(!fs.existsSync(templateFolderPath)){ throw Messages.TEMPLATE_FOLDER_NOT_FOUND }
            

            this.copyFolderContent(templateFolderPath);

            console.log(chalk.bgBlueBright(`${appname} created!`));

        } catch(error) {
            console.log(chalk.bgRedBright("couldn't copy teampalte folder"));
        }
    }

 
    
}