const express = require('express')
const app = express()

const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/twiter" , (req , res) =>{
    res.send("twitter comes online")
})

app.get("/main" , ( req , res ) => {
    res.send("<h1>Hello World!</h1>")
})

app.get("/youtube" , (req  , res) => {
    res.send("<p>Youtube</p>")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

