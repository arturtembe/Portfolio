export default class ImageUtil{
    async formatTextIcon(str: string):Promise<string>{
        let dado = ""; //, endpoint = ""
        
        if(str){
            const strSplit = str.split(';');
            strSplit.forEach(el=>{
                if(el.indexOf('icon') > -1){
                    dado = el.replace(' ',"").substring(5,el.length);
                    // endpoint = `${this.endpointProjecto}${dado}`;
                }
            })
        }
        
        return dado;
    }
}
