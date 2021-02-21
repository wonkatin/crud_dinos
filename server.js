//required modules 
const express = require('express')
//variables
const app = express();
const PORT = 3000;
//routes
app.get('/', (req, res)=> {
    res.send('Hello World, this is Sarah Marie')
})
//run nodemon cntrl c to exit

app.listen(PORT, ()=> {
    console.log(`Server is listening on port ${PORT}`)
})