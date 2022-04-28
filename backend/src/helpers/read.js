const fs = require("fs");
// const path = require("path");

function getFiles(dir) {
  // get all 'files' in this directory
  var all = fs.readdirSync(dir);

  // process each checking directories and saving files
  return all.map((file) => {
    // am I a directory?
    if (fs.statSync(`${dir}/${file}`).isDirectory()) {
      // recursively scan me for my files
      return getFiles(`${dir}/${file}`);
    }
    // WARNING! I could be something else here!!!
    return { src: `${dir}/${file}`, name: file }; // file name (see warning)
  });
}

module.exports = { getFiles };
