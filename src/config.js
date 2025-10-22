import Conf from "conf";



export default class Config{
    static config = new Conf({projectName: "gen"})

    static setTemplateFolder(folderPath){
        this.config.set("templateFolder", folderPath);
    }
    
    static getTemplateFolder(){
        return this.config.get("templateFolder");
    }

}