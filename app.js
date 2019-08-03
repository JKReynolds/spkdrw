const express = require('express')
const open = require('open');
const app = express()
const port = 3000

app.use(express.static('public'))
app.listen(port, () => console.log(`spkdrw server listening on ${port}!`))

open("http://localhost:3000",{app:'google-chrome'});