let fs = require("fs");
let path  = require("path");

function displayList(src, ){
    let ans =fs.lstatSync(src).isDirectory();
    if (ans==false){
       console.log(src +  "*");
    }
    else{
        console.log(src);
        //how to list the content of directory in nodejs
       
        let children = fs.readdirSync(src)

        for(let i =0; i<children.length; i++){
            let cpath= path.join(src,children[i]);
            displayList(cpath);
        }
        // fs.readdirSync(src).forEach(file => {
        //  console.log(file);
        //  displayList(src + '\\' + file);
        // });
    }   
}

//displayList("E:\\placementPgm\\dev\\lec2_feb25\\src\\d10");
displayList("src\\d10");