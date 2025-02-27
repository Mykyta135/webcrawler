const { crawlPage } = require("./crawl");

function main(){
    if(process.argv.length < 3){
        console.log('Url is nor defined');
        return
    }
    else if(process.argv.length > 3){
        console.log('Too many arguments');
        return
    }
    else{
        const baseURL = process.argv[2];
        crawlPage(baseURL);
    }
}



main()