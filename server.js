//required modules 
const express = require('express')
const rowdy = require('rowdy-logger')
const db = require('./models')

//variables
const app = express();
const PORT = 3000;
const rowdyResults = rowdy.begin(app)

//Middleware
app.use(express.urlencoded({extended: false}))
// urlendcoded gets the form data from request and puts it inside of the req.body

//routes
app.get('/', (req, res)=> {
    res.send('Hello World, this is Sarah Marie')
})

//CRUD routes for dinos

//Index (Read All) Route 
app.get('/dinos', async (req, res) => {
    try {
        const dinos = await db.dino.findAll()
        res.send(dinos)
    } 
    catch (error) {
      console.log(error)
    }
})

//Show One Route
app.get('/dinos/:id', async (req, res) => {
    try {
        const dino = await db.dino.findByPk(req.params.id)
        res.send(dino)
    } 
    catch (error) {
      console.log(error)
    }
})

//Create One
app.post('/dinos', async (req, res) => {
    try {
        const newDino = await db.dino.create({
            name: req.body.name,
            type: req.body.type
        })
        res.send(newDino);
    } 
    catch (error) {
      console.log(error)
    }
})

// Update One
app.put('/dinos/:id', async (req, res) => {
    try {
        const dino = await db.dino.findByPk(req.params.id)
        const updateDino = await dino.update({
            name: req.body.name,
            type: req.body.type
        })
        res.send(updateDino)
    } 
    catch (error) {
      console.log(error)
    }
})

//Delete One
app.delete('/dinos/:id', async (req, res) => {
    try {
        const dino = await db.dino.findByPk(req.params.id)
        const deleteDino = await dino.destroy();
        res.send(deleteDino)
    } 
    catch (error) {
      console.log(error)
    }
})

//run nodemon cntrl c to exit

app.listen(PORT, ()=> {
    rowdyResults.print()
    console.log(`Server is listening on port ${PORT}`)
})