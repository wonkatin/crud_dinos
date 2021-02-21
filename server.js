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
// app.get('/', (req, res)=> {
//     res.send('Hello World, this is Sarah Marie')
// })
//Controllers
app.use('/dinos', require('./controllers/dinoController'))
app.use('/creatures', require('./controllers/creatureController'))


//run nodemon cntrl c to exit

app.listen(PORT, ()=> {
    rowdyResults.print()
    console.log(`Server is listening on port ${PORT}`)
})