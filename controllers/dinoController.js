const router = require('express').Router()
const db = require('../models')


//CRUD routes for dinos 

//Create One
router.post('/', async (req, res) => {
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

//Show One Route
router.get('/:id', async (req, res) => {
    try {
        const dino = await db.dino.findByPk(req.params.id)
        res.send(dino)
    } 
    catch (error) {
        console.log(error)
    }
})

//Index (Read All) Route 
router.get('/', async (req, res) => {
    try {
        const dinos = await db.dino.findAll()
        res.send(dinos)
    } 
    catch (error) {
        console.log(error)
    }
})

// Update One
router.put('/:id', async (req, res) => {
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
router.delete('/:id', async (req, res) => {
    try {
        const dino = await db.dino.findByPk(req.params.id)
        const deleteDino = await dino.destroy();
        res.send(deleteDino)
    } 
    catch (error) {
        console.log(error)
    }
})

module.exports = router;