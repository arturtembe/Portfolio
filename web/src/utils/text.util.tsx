interface GithLiveInterface{
    name: string;
    url: string;
}
export default class TextUtil{
    tecnologiaFormat(str: string){
        let value = "";
        if(str){
            if(str.indexOf(';')> -1){
                const strSplit = str.split(';');

                strSplit.forEach((el,i)=>{
                    if(i+1 < strSplit.length)
                        value += `${el}, `
                    else
                        value +=el;
                })
            }else{
                value = str;
            }
        }
        return value;
    }

    gitLiveFormat(str: string){
        const value:GithLiveInterface[] = [];
        
        if(str){
            str.split(';').forEach(el=>{
                if(el.indexOf('|') > -1){
                    const dado = el.split('|');
                    if(dado[0] && dado[1]){
                        value.push({
                            name: dado[0],
                            url: dado[1]
                        })
                    }
                }
            })
        }
        return value;
    }
}