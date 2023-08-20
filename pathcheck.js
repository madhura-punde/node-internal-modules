const path = require('path');

// returns an obj with root dire base ext and name of file
var pathobj = path.parse(__filename);

// returns file extension
const extensionofFile = path.extname(pathobj.base)

//returns true if absolute path 
const isAbs = path.isAbsolute(pathobj.dir)

console.log({pathobj, extensionofFile, isAbs});

// {
//     pathobj: {
//       root: '/',
//       dir: '/Users/madhurapunde/Desktop/My Folder/Node-Internal Modules',
//       base: 'pathcheck.js',
//       ext: '.js',
//       name: 'pathcheck'
//     },
//     extensionofFile: '.js',
//     isAbs: true
//   }