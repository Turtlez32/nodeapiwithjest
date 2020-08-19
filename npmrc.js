// This is used to ensure the .npmrc file uses the local binding for node-sass
// Passing in a relative path wasn't possible so this constrcutes the .npmrc file with the absolute path
var fs = require("fs");
var sassBinaryPath = `"${process.cwd()}\\binary_files\\win32-x64-64_binding.node"`
  .split("\\")
  .join("\\\\");

// If file already exists then delete it
fs.existsSync(".npmrc") && fs.unlinkSync(".npmrc");

// Create the npmrc file
fs.appendFileSync(".npmrc", `registry=http://10.132.44.192:4873\r\n`);

console.log(".npmrc file created");

process.exit();
