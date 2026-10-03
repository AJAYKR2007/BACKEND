const express = require("express");
const noteModel = require("./models/note.model");

const app = express();
app.use(express.json());


/*
POST / notes => create  a note
GET / notes => get all notes
DELETE / notes/ : id => Delete a note
PATCH / notes/ :id => Update a note

*/


app.post("/notes", async (req, res) => {
    
    const data = req.body  /*  { title,description} */
     await noteModel.create({
        title:data.title,
        description:data.description
    })

    res.status(201).json({
        message: "Note created" 
    })

});

module.exports = app;