const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'example.txt');
const contentToWrite = 'Hello world!';

// Write to file
fs.writeFile(filePath, contentToWrite, err => {
  if (err) {
    console.error('Error writing to file:', err);
    return;
  }
  
  console.log('File written successfully.');

  // Read from file
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return;
    }


    console.log('File content:', data);
    console.log('Appending to file...');
    const contentToAppend = 'class is going on';
    // Append to file
    fs.appendFile(filePath, contentToAppend, err => {
      if (err) {
        console.error('Error appending to file:', err);
        return;
      }
      console.log('Content appended successfully.');
    });
    
  });
});
fs.mkdir('dir1',(err)=>{
  if(err){
    console.log(err);
   
  }
  console.log('Directory created successfully.');
})
fs.rmdir('dir1',(err)=>{
  if(err){
    console.log(err);
   
  }
  console.log('Directory deleted successfully.');
})
fs.rename('example.txt','example1.txt',(err)=>{
  if(err){
    console.log(err);
   
  }
  console.log('File renamed successfully.');
})
const p='/home/arpit-srivastava/Desktop/sstnode/readwrite.js';
const path1 = require("path");
const dirname = path1.dirname(p); 
const extension = path1.extname(p);
console.log(dirname);
console.log(extension);





const source='/home/arpit-srivastava/Desktop/sstnode/example1.txt';
const destination='/home/arpit-srivastava/Desktop/sstnode/dir2';
fs.copyFile(source, destination, (err) => {
  if (err) throw err;
  console.log('source.txt was copied to destination.txt');
});
const {read} = require('fs');
const http = require('http');
const url = require('url'); 
// const http=require('http');
const server=http.createServer((req,res)=>{
  res.setHeader('Content-Type','text/html');
  res.write('<html><head><title>noode js class</title></head><body>');
  res.write('<h1>hello world</h1>');
  res.write('</body></<h1>Hello World</h1></body></htmlhtml>');
  res.end();
});
const port = 3000;  
const host = 'localhost';

server.listen(port,host,()=>{
    console.log(`Server is running on http://${host}:${port}`);
});

