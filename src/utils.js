import fs from "fs";
import path from "path";


import Config from "./config.js";

import { Messages } from "./constants/Messages.js";





export function copyFoldeContent(appname){
    
    const templateSrc = Config.getTemplateFolder() + "/" + appname;
    
    
    if(!fs.existsSync(templateSrc)){ throw Messages.TEMPLATE_FOLDER_NOT_FOUND }



    const items = fs.readdirSync(templateSrc);

    for (const item of items) {
        
        // get the path to each item in template folder
        const src = path.join(templateSrc, item);
        const des = path.join(process.cwd(), item);

        // copy each item
        fs.cpSync(src, des, {recursive: true});

    }
    
    
}