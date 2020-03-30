let fs = require("fs");
let path  = require("path");

function displayTree(src, str ){
    let ans =fs.lstatSync(src).isDirectory();
    if (ans==false){
       console.log(str + path.basename(src) +  "*");
    }
    else{

        console.log(str + path.basename(src));
        //how to list the content of directory in nodejs
       
        let children = fs.readdirSync(src)

        for(let i =0; i<children.length; i++){
            let cpath= path.join(src,children[i]);
            displayTree(cpath, str+"\t");
        }
        // fs.readdirSync(src).forEach(file => {
        //  console.log(file);
        //  displayList(src + '\\' + file);
        // });
    }   
}

//displayList("E:\\placementPgm\\dev\\lec2_feb25\\src\\d10");
displayTree("src\\d10", "");