var request = require('request');
var fs = require('fs');

console.log("Beginning download!");
request.get('https://sytantris.github.io/http-examples/future.jpg')
  .on('error', function(error){
    console.log(error);
  })
  .on('response', function(response){
    if(response.code == 200){
      console.log("Download complete!");
    }
    console.log('Response code: ', response.statusMessage);
  })
  .pipe(fs.createWriteStream('./future.jpg'));