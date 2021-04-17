const express = require ("express");
const path = require('path');
const fs = require("fs");

const app = express();

const port = 8080;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));

//should i add an id in this area as well?
// const Note = [
//   {
//     "title": "Test Title",
//     "text": "Test text"
//   }
// ]

app.get('/notes',(req,res) => res.sendFile(path.join(__dirname,'../public/notes.html')));

app.get('/', (req,res) => res.sendFile(path.join(__dirname,'../public/index.html')));


// app.get('/api/notes', (req,res) => {
//     console.log("getting all notes");
//     fs.readFile('./db/db.json','utf8',(error,response)=> {
//         if (error) throw error;
//         var notes = JSON.parse(response);//sending data back in json format 
//         res.json(notes);

//     })
// });

// app.post('/api/notes', (req,res) => {
//     const newNote = req.body;
//     newNote.//route? = newNote.//
//     //console.log("note added");
//    // notes.push(newNote);
//    //res.json(newNote);
// });

// app.delete('/api/notes',(req,res) => {
//     console.log("deleting note");
//     fs.readFile('./db/db.json)','utf8',(error,response) => {
//         if (error) throw error;
//         var notes = JSON.parse(response);
//         res.json(notes);
//     })
// });




app.listen(port,()=> console.log ("listening on port 8080"));