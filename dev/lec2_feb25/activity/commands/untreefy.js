
let fs = require("fs");
let path  = require("path");
let uniqid = require("uniqid");

module.exports.untreefy = function(){
    let src = arguments[0];
    let dest = arguments[1];
    let root = {};
    copyfn(src, dest, root);
    console.log(root.childArr);

    let data = JSON.stringify(root);
    

    fs.writeFileSync(path.join(dest, "metadata.json"),data);

};


function copyfn(src ,dest, node){
    let ans =fs.lstatSync(src).isDirectory();

    if (ans==false){
        //copy file from source to dest and rename them
        let uniqueName = uniqid();
        node.isFile = true;
        node.name = path.basename(src);
        node.newName = uniqueName;
        fs.copyFileSync(src, path.join(dest,uniqueName));
       
    }
    else{
        //how to list the content of directory in nodejs
       
        node.isFile = false;
        node.name = path.basename(src);
        node.childArr = [];
        let children = fs.readdirSync(src);

        for(let i =0; i<children.length; i++){
            let childObj = {};
            let cpath= path.join(src,children[i]);
            copyfn(cpath, dest, childObj);
            node.childArr.push(childObj);
        }
        
    }   
};