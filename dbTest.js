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
makeCreatures();
// try {
// } 
// catch (error) {
//   console.log(error)
// }