// server ko create karna 
const express = require ("express");


const app = express()
app.use(express.json())


const notes = []

/* title , description */
/*POST /notes */

app.post('/notes', (req,res) => {
 notes.push(req.body)

 res.status(201).json({
    message:"note created successfully"
 })

})


/*GET /notes */
app.get('/notes', (req, res) => {
     
    res.sendStatus(200).json({
        message:"notes fetched successfully",
        notes:notes
    })
})


/*DELETE /notes/1 */

app.delete('/notes/:index', (req,res) => {

    const index = req.params.index /* 1 */

    delete notes [ index ]

    res.sendStatus(200).json({
        message:"note deleted successfully"
    })


})

/* PATCH */
app.patch("/notes/:index", (req , res) => {

   const index = req.params.index
   const description = req.body.description

   notes [ index ].description = description

   res.sendStatus(200).json({
    message:"note updated successfully"
   })

})


module.exports = app