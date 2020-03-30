let cmd = process.argv[2];
let viewfile = require("./commands/view");
let treefyfile = require("./commands/treefy");
let untreefyfile = require("./commands/untreefy");
let helpfile = require("./commands/help");
let monitorfile = require("./commands/monitor");
switch(cmd){
    case "view":
        viewfile.view(process.argv[3],process.argv[4]);
        break;

    case "untreefy":
        untreefyfile.untreefy(process.argv[3],process.argv[4]);
        break;

    case "treefy":
        treefyfile.treefy(process.argv[3],process.argv[4]);
       break;

    case "monitor":
        monitorfile.monitor(process.argv[3],process.argv[4]);
        break;

    case "help":
        helpfile.help();
        break;
    
    default: 
}