var fs = require('fs');

//create a file named mynewfile1.txt:
fs.appendFile('mynewfile1.txt', 'Hello új tartalom!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});
