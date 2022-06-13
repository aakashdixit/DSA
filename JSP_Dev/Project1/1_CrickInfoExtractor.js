// npm init -y
// npm install minimist     // to read args
// npm install axios        // to download HTML from web
// npm install jsdom        // to read the data
// npm install excel4node      // to write excel files
// npm install pdf-lib          // to write pdf files

// node 1_CrickInfoExtractor.js --excel=Worlscup2019.csv --datafolder=data --source=https://www.espncricinfo.com/series/icc-cricket-world-cup-2019-1144415/match-results

let minimist = require("minimist");
let axios = require("axios");
let jsdom = require("jsdom");
let excel4node = require("excel4node");
let pdf = require("pdf-lib");


let args = minimist(process.argv);

let responseKaPromise = axios.get(args.source);
responseKaPromise.then(function(response){
    let html = response.data;
    let dom = new jsdom.JSDOM(html);
    let document = dom.window.document;
    let title = document.title;
    console.log(title);
}) .catch(function(err){
    console.log(err)
})
 