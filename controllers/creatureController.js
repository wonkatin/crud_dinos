const router = require('express').Router()
const db = require('../models')


//CRUD routes for creatures

//Create One
router.post('/', async (req, res) => {
    try {
        const newCreature = await db.creature.create({
            type: req.body.type,
            img_url: req.body.img_url
        })
        res.send(newCreature);
    } 
    catch (error) {
        console.log(error)
    }
})

//Show One Route
router.get('/:id', async (req, res) => {
    try {
        const creature = await db.creature.findByPk(req.params.id)
        res.send(creature)
    } 
    catch (error) {
        console.log(error)
    }
})

//Index (Read All) Route 
router.get('/', async (req, res) => {
    try {
        const creatures = await db.creature.findAll()
        res.send(creatures)
    } 
    catch (error) {
        console.log(error)
    }
})

// Update One
router.put('/:id', async (req, res) => {
    try {
        const creature = await db.creature.findByPk(req.params.id)
        const updateCreature = await creature.update({
            type: req.body.type,
            img_url: req.body.img_url
        })
        res.send(updateCreature)
    } 
    catch (error) {
        console.log(error)
    }
})

//Delete One
router.delete('/:id', async (req, res) => {
    try {
        const creature = await db.creature.findByPk(req.params.id)
        const deleteCreature = await creature.destroy();
        res.send(deleteCreature)
    } 
    catch (error) {
        console.log(error)
    }
})
module.exports = router;