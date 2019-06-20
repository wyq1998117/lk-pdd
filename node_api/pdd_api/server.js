const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('dist'));
app.get(/.*/,(req,res)=>{
  res.sendFile(__dirname + './dist/index.html');
})
// app.use(express.static(path.join(__dirname, 'dist')))
app.listen(3000,() => {
    console.log('app listening on port 3000.')
})
