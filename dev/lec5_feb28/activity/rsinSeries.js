let request = require("request");
let fs = require("fs");
let cheerio = require("cheerio");

let url = `https://www.espncricinfo.com/series/${seriesId}`;

request(url, function(err, res, html){
    if(err==null && res.statusCode==200){
        fs.writeFileSync("abc.html", html);
        parseHtml(html);
    }
    else if(res.statusCode==400){
        console.log("page not found");
    }
    else{
        console.log(err);
        console.log(res.statusCode);
    }
});

function parseHtml(html){
    let co = cheerio.load(html);
    //let tableArr = co(".scorecard-section.bowling").find("table").length;
    //console.log(tableArr);
    let tableArr = co(".scorecard-section.bowling table tbody tr");
    let maxWicketTaker = "";
    let maxWicket = 0;

    for(let i =0; i< tableArr.length; i++){
        let tdArr = co(tableArr[i]).find("td");
        let wicket = co(tdArr[5]).html();
        let bowlerName = co(tableArr[i]).find("td a").html();
        if(wicket > maxWicket){
            maxWicketTaker = bowlerName;
            maxWicket = wicket;
        }

    }
    console.log(maxWicketTaker +" " + maxWicket);
    fs.writeFileSync("table.html", tableArr);
}