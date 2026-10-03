const express = require("express");
const noteModel = require("./models/note.model");

const app = express();

app.use(express.json());

/*
POST /notes => create a note
GET /notes => get all notes
DELETE /notes/:id => delete a note
PATCH /notes/:id => update a note
*/


// ==================================================
// 1. POST - CREATE
// New Note Create Karne Ke Liye
// ==================================================

app.post("/notes", async (req, res) => {

    const data = req.body;

    await noteModel.create({
        title: data.title,
        description: data.description
    });

    res.status(201).json({
        message: "Note created"
    });
});


// ==================================================
// 2. GET - READ
// Saare Notes Fetch Karne Ke Liye
// ==================================================

app.get("/notes", async (req, res) => {

    const notes = await noteModel.find({});

    res.status(200).json({
        message: "Notes fetched successfully",
        notes: notes
    });
});


// ==================================================
// 3. DELETE - DELETE
// Note Delete Karne Ke Liye
// ==================================================

app.delete("/notes/:id", async (req, res) => {

    const id = req.params.id;

    await noteModel.findOneAndDelete({
        _id: id
    });

    res.status(200).json({
        message: "Note deleted successfully"
    });
});


// ==================================================
// 4. PATCH - UPDATE
// Note Update Karne Ke Liye
// ==================================================

app.patch("/notes/:id", async (req, res) => {

    const id = req.params.id;

    const description = req.body.description;

    await noteModel.findOneAndUpdate(
        {
            _id: id
        },
        {
            description: description
        }
    );

    res.status(200).json({
        message: "Note updated successfully"
    });
});


module.exports = app;
