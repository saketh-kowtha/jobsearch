const express = require('express');
const path = require('path');
const app = express();
var PORT_NUMBER = 5454

if(process.argv[2] && process.argv[2].toLocaleLowerCase() === "-p"){
    if(process.argv[3] && !isNaN(process.argv[3]))
        PORT_NUMBER = process.argv[3]
    else{
        console.log("Invalid port number port number should be numeric value")
        process.exit()
    }
}
else{
    console.log("Invalid argument has passed please us -p || -P")
    process.exit()
}


app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT_NUMBER, function(){
    console.log(`Hello Geek!!\nYou have successfully started server.\nRunning on port ${PORT_NUMBER}`)
});