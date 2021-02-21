const models = require('./models')
const data = require('./prehistoric_creatures.json')


const makeDino = async () => {
    models.dino.create({
        name: "Ducky",
        type: "Parasaurolophus"
    })
}
// makeDino();

const makeCreatures = async () => {
    models.creature.bulkCreate(data)
}
// makeCreatures();

const makeHabitat = async () => {
    models.habitat.create({
        name: "desert"
    })
}
// makeHabitat()
// try {
// } 
// catch (error) {
//   console.log(error)
// }

