let fs = require("fs");
let path  = require("path");


module.exports.view = function(){
    let src = arguments[0];
    let mode = arguments[1];
    if(mode== "-t"){
        viewAsTree(src, "");
    }
    else if(mode=="-f"){
        viewAsFlat(src);
    }
    else{
        console.log("wrong parameters");
    }

};

function viewAsTree(src, str){
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
            viewAsTree(cpath, str+"\t");
        }
        // fs.readdirSync(src).forEach(file => {
        //  console.log(file);
        //  displayList(src + '\\' + file);
        // });
    }   
}

function viewAsFlat(src){
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
            viewAsFlat(cpath);
        }
        
    }   
}