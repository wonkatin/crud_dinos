const router = require('express').Router()
const db = require('../models')

// router.get('/testing', (req, res) => {
//     res.send('hello from habitats!')
// })

//Create One
router.post('/', async (req, res) => {
    try {
        const newHabitat = await db.habitat.create({
            name: req.body.name,
        })
        res.send(newHabitat);
    } 
    catch (error) {
        console.log(error)
    }
})
//Create child of habitat parent
router.post('/:id/dinos', async (req, res) => {
    try {
        const habitat = await db.habitat.findByPk(req.params.id)
        const newDino = await habitat.createDino({
            name: req.body.name,
            type: req.body.type,
            // habitatId: habitat.id
        })
        res.send(newDino)
    } 
    catch (error) {
        console.log(error)
    }
})
//Index (Read All) Route 
router.get('/', async (req, res) => {
    try {
        const habitats = await db.habitat.findAll()
        res.send(habitats)
    } 
    catch (error) {
        console.log(error)
    }
})
//Index (Read All) CHILD Route 
router.get('/:id/dinos', async (req, res) => {
    try {
        const habitat = await db.habitat.findByPk(req.params.id)
        const dinos = await habitat.getDinos()
        res.send(dinos)
    } 
    catch (error) {
        console.log(error)
    }
})

module.exports = router;